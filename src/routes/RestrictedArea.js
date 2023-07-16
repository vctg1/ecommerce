import React, { useState } from "react";
import { Grid } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestAreaHeader from "../components/rest-area-components/Header";
import MyAnnounces from "../pages/RestrictedArea/MyAnnounces";
import Favorites from "../pages/RestrictedArea/MyActivity/Favorites";
import History from "../pages/RestrictedArea/MyActivity/History";
import Removed from "../pages/RestrictedArea/MyActivity/Removed";
import PropertyUpdate from "../components/rest-area-components/PropertyUpdate";

export default function RestrictedArea(props) {
  const matches = props.matches;
  const login = sessionStorage.getItem("login");
  const [costumer, setCostumer] = useState();
  const [propertyId, setPropertyId] = useState();
  return (
    <BrowserRouter basename={`/area-restrita`}>
      <RestAreaHeader
        login={login}
        costumer={costumer}
        setCostumer={setCostumer}
      />
      <Grid
        style={{
          padding: `${matches ? "5rem 16rem" : "10vh 10px"}`,
          minHeight: "35rem",
        }}
      >
        <Routes>
          <Route
            path={`/meus-anuncios`}
            element={
              <MyAnnounces
                setPropertyId={setPropertyId}
                costumer={costumer}
                matches={matches}
              />
            }
          />
          <Route
            path={`/meus-anuncios/${propertyId}`}
            element={
              <PropertyUpdate
                property_id={propertyId}
                costumer={costumer}
                matches={matches}
              />
            }
          />
          <Route
            path={`/minha-atividade/favoritos`}
            element={<Favorites matches={matches} />}
          />
          <Route
            path={`/minha-atividade/historico`}
            element={<History matches={matches} />}
          />
          <Route
            path={`/minha-atividade/descartados`}
            element={<Removed matches={matches} />}
          />
        </Routes>
      </Grid>
    </BrowserRouter>
  );
}
