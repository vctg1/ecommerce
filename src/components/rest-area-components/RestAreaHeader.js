import { Box, Button, Collapse, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../../images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function RestAreaHeader(props) {
  const [openInfo, setOpenInfo] = useState();
  const [menuOpen, setMenuOpen] = useState("Minha atividade");
  const menuList = ["Minha atividade", "Minha conta"];
  return (
    <Grid
      display="grid"
      gridTemplateColumns="1fr 1fr"
      sx={{ backgroundColor: "whitesmoke", padding: "2rem 8rem .5rem" }}
    >
      <Box
        display="inline-flex"
        height="max-content"
        alignItems="end"
        gap="1rem"
      >
        <img height="50vh" src={logo} />
        {menuList.map((item) => (
          <div
            onClick={() => setMenuOpen(item)}
            style={{
              textDecoration: menuOpen === item ? "underline" : "",
              backgroundColor: menuOpen === item ? "white" : "",
              fontWeight: menuOpen === item ? "bold" : "",
              textDecorationColor: menuOpen === item ? "lightgreen" : "",
              textDecorationThickness: menuOpen === item ? "2px" : "",
              cursor: "pointer",
              padding: ".5rem",
              borderRadius: "5px",
              transition: "300ms",
            }}
          >
            {item}
          </div>
        ))}
      </Box>
      <Box
        display="inline-flex"
        justifyContent="end"
        alignItems="center"
        gap="1rem"
      >
        <Button
          variant="contained"
          color="success"
          sx={{ height: "max-content", width: "max-content" }}
        >
          <b>Publicar imóvel</b>
        </Button>
        <div
          onMouseEnter={() => {
            setOpenInfo(true);
          }}
          onMouseLeave={() => {
            setOpenInfo(false);
          }}
          style={{
            width: "max-content",
            height: "max-content",
          }}
        >
          <AccountCircleIcon
            color="info"
            sx={{
              fontSize: "50px",
              scale: openInfo ? "110%" : "",
              transition: "300ms",
            }}
          />
          <Collapse
            style={{
              position: "absolute",
              textAlign: "end",
              marginRight: "8rem",
              padding: "1rem",
              backgroundColor: "whitesmoke",
              right: 0,
              wordBreak: "break-word",
              maxWidth:'15vw'
            }}
            in={openInfo}
          >
            <div>
              <Typography>{props.costumer.name}</Typography>
              <Typography>{props.costumer.email}</Typography>
              <Typography>[nome]</Typography>
            </div>
          </Collapse>
        </div>
      </Box>
    </Grid>
  );
}
