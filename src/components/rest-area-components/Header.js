import { Box, Button, Collapse, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Publish from "./Publish.js";
import { GetCustomerByCpf } from "../ApiCrude";

export default function RestAreaHeader(props) {
  const [menuOpen, setMenuOpen] = useState([
    window.location.pathname.split("/area-restrita/")[1],
  ]);
  const login = props.login;
  const costumer = props.costumer;
  async function LoadCostumer() {
    const response = await GetCustomerByCpf(login);
    if (response?.length > 0) {
      props.setCostumer(response[0]);
    } else {
      window.location.href = "/ecommerce/login";
    }
  }
  useEffect(() => {
    LoadCostumer();
  }, []);
  const [openInfo, setOpenInfo] = useState();
  const [openPopUp, setOpenPopUp] = useState();
  const menuList = [
    { id: 0, title: "Meus anúncios", page: "meus-anuncios" },
    { id: 1, title: "Minha atividade", page: "minha-atividade/favoritos" },
  ];
  function menuBtnStyle(e) {
    const item =
      menuOpen[0]?.includes(e.split("/favoritos")[0]) || menuOpen?.includes(e);
    if (item) {
      return {
        display: "grid",
        textDecoration: "underline",
        backgroundColor: "white",
        fontWeight: "bold",
        textDecorationColor: "lightgreen",
        textDecorationThickness: "2px",
        cursor: "pointer",
        padding: ".5rem",
        borderRadius: "5px 5px 0 0",
        transition: "100ms",
        alignItems: "center",
        color: "black",
      };
    } else {
      return {
        cursor: "pointer",
        padding: ".5rem",
        transition: "100ms",
        alignItems: "center",
        textDecoration: "none",
        color: "black",
      };
    }
  }
  return (
    <Grid
      display="grid"
      gridTemplateColumns="1fr 1fr"
      sx={{ backgroundColor: "whitesmoke", padding: "2rem 8rem 0" }}
    >
      <Box display="inline-flex" alignItems="end" gap="1rem">
        <div
          style={{ display: "grid", alignItems: "center", padding: ".5rem" }}
        >
          <img style={{ maxHeight: "3.5rem" }} src={logo} alt="" />
        </div>
        {menuList.map((item, key) => (
          <Link
            to={item.page}
            key={key}
            onClick={() => {
              setMenuOpen([item.page]);
            }}
            onMouseEnter={() => {
              setMenuOpen((data) => [...data, item.page]);
            }}
            onMouseLeave={() => {
              if (!window.location.pathname.includes(item.page)) {
                menuOpen.splice(menuOpen.indexOf(item.page), 1);
                setMenuOpen((data) => [...data]);
              }
            }}
            style={menuBtnStyle(item.page)}
          >
            <p>{item.title}</p>
          </Link>
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
          onClick={() => setOpenPopUp(true)}
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
              transition: "200ms",
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
              maxWidth: "15vw",
            }}
            in={openInfo}
          >
            <div>
              <Typography>{costumer?.name}</Typography>
              <Typography>{costumer?.cpf}</Typography>
              <Typography>
                <Link
                  onClick={() => {
                    setMenuOpen([]);
                  }}
                  to="minha-conta"
                  sx={{ cursor: "pointer" }}
                >
                  Minha conta
                </Link>
              </Typography>
              <Typography>
                <a
                  href="/ecommerce"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    sessionStorage.clear("login");
                  }}
                >
                  sair
                </a>
              </Typography>
            </div>
          </Collapse>
        </div>
      </Box>
      <Popup
        open={openPopUp}
        onClose={() => setOpenPopUp(false)}
        position="right center"
      >
        <Publish costumer={costumer} setOpenPopUp={setOpenPopUp} />
      </Popup>
    </Grid>
  );
}
