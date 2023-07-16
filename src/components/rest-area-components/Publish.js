import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import InputMask from "react-input-mask";
import { DropzoneArea } from "react-mui-dropzone";
import { Close, Delete } from "@mui/icons-material";
import { PostImage, PostProperty } from "../ApiCrude";

export default function Publish(props) {
  const costumer = props.costumer;
  const [data, setData] = useState({ customer_id: costumer.id });
  const [limitChar, setLimitChar] = useState(500);
  const [images, setImages] = useState([]);
  async function handleChange(item, value) {
    setData((data) => ({ ...data, [item]: value }));
  }
  async function addImage(e) {
    setImages(e);
  }
  async function handleReset(e) {
    e.preventDefault();
    setImages([]);
    Object.keys(data).forEach((item) => {
      handleChange(item, "");
    });
    setLimitChar(500);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const property = await PostProperty(data)
      .then((res) => {return res.data})
      .catch((error) => {return error});
    images.map(async (image) => {
      const base64 = await convertToBase64(image);
      PostImage(base64, property.id)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    });
    console.log("submit");
  }
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  useEffect(() => {
    if (images.length < 1) {
      return;
    }
    const newImageUrls = [];
    images.forEach((image) => {
      newImageUrls.push(URL.createObjectURL(image));
    });
    console.log(images);
    console.log(costumer);
  }, [images]);
  return (
    <form
      onReset={handleReset}
      onSubmit={handleSubmit}
      style={{
        padding: "1rem",
        display: "grid",
        maxHeight: "90vh",
        overflow: "auto",
      }}
    >
      <Button
        onClick={() => {
          props.setOpenPopUp(false);
        }}
        sx={{ justifySelf: "end" }}
        variant="outlined"
        color="error"
      >
        <Close />
      </Button>
      <Typography variant="h3" textAlign="center" paddingBottom="1rem">
        Publicar Imóvel
      </Typography>
      <DropzoneArea
        dropzoneText="Arraste e solte fotos aqui ou clique!"
        maxFileSize={2000000}
        filesLimit={9}
        onChange={(e) => addImage(e)}
      />
      <Grid
        display={"grid"}
        marginTop={"1rem"}
        gridTemplateColumns="1fr 1fr"
        gap="1rem"
      >
        {/* <InputMask
          onChange={(e) => {
            setData((data) => ({ ...data, cpf: e.target.value }));
          }}
          id="bairro"
        >
          {() => <TextField label="Bairro" />}
        </InputMask> */}
        <TextField
          required
          onChange={(e) => handleChange("suburb", e.target.value)}
          value={data?.suburb}
          label="Bairro"
        />
        <TextField
          required
          onChange={(e) => handleChange("address", e.target.value)}
          value={data?.address}
          type="text"
          label="Endereço"
        />
        <TextField
          required
          onChange={(e) => handleChange("price", Number(e.target.value))}
          value={data?.price}
          inputProps={{
            min: "0",
            step: "100",
            max: "100000000",
          }}
          type="number"
          label="Preço (R$)"
        />
        <TextField
          inputProps={{
            min: "0",
            step: "10",
            max: "1000000",
          }}
          required
          onChange={(e) => handleChange("rent", Number(e.target.value))}
          value={data?.rent}
          type="number"
          label="Aluguel (R$)"
        />
      </Grid>
      <Box display="grid" paddingTop="1rem">
        <div
          style={{
            display: "grid",
            width: "100%",
            justifyContent: "end",
          }}
        >
          <p
            style={{
              paddingRight: "1rem",
              margin: 0,
              marginBottom: "-1.5rem",
            }}
          >
            {limitChar}/500
          </p>
        </div>
        <TextField
          required
          inputProps={{ maxLength: 500 }}
          type="text"
          fullWidth
          label="Descrição"
          minRows="5"
          maxRows="10"
          multiline
          value={data?.description}
          onChange={(e) => {
            handleChange("description", e.target.value);
            setLimitChar(500 - e.target.value.length);
          }}
        />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        gap="1rem"
        paddingTop="1rem"
      >
        <Button variant="outlined" color="error" type="reset">
          Limpar
        </Button>
        <Button variant="outlined" color="success" type="submit">
          Enviar
        </Button>
      </Box>
    </form>
  );
}
