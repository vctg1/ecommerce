import React from "react";
import { Button, Grid, Typography, Paper } from "@mui/material";
import HomeCarousel from "../../components/home-components/Carousel";
import EastIcon from "@mui/icons-material/East";
import HomeSearch from "../../components/home-components/HomeSearch";
import { Link } from "react-router-dom";
import InfoPapers from "../../components/home-components/InfoPapers";

export default function Home(props) {
  return (
    <Grid >
      <HomeSearch
        search={props.search}
        setSearch={props.setSearch}
        matches={props.matches}
      />
      <InfoPapers matches={props.matches} />
      <Paper
        style={{
          display: "grid",
          gridTemplateColumns: `${props.matches ? "1fr 1.5fr" : "1fr"}`,
          backgroundColor: "#eeeee4"
        }}
      >
        <Typography margin="30px" textAlign="end" fontSize="18px">
          Com a fonte mais completa de casas à venda e imóveis perto de você
          <br />
          <b>Encontre aqui o imóvel dos seus sonhos!</b>
          <br />
          Alguns de nossos imóveis disponíveis
          <br />
          <Link to="/comprar">
            <Button color="info">
              <EastIcon sx={{ fontSize: 40 }} />
            </Button>
          </Link>
        </Typography>
        <HomeCarousel matches={props.matches} />
      </Paper>
    </Grid>
  );
}
