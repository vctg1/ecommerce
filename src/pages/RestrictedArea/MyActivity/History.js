import { Grid } from "@mui/material";
import React, { useState } from "react";
import MenuSelect from "../../../components/rest-area-components/MenuSelect";

export default function History() {
  const [selected, setSelected] = useState(
    window.location.pathname.split("/area-restrita/minha-atividade/")[1] ||
      "favoritos"
  );
  const menuOptions = [
    { id: 0, title: "Favoritos", page: "favoritos" },
    { id: 1, title: "Histórico", page: "historico" },
    {
      id: 2,
      title: "Descartados",
      page: "descartados",
    },
  ];
  return (
    <Grid>
      <MenuSelect
        menuOptions={menuOptions}
        selected={selected}
        setSelected={setSelected}
      />
    </Grid>
  );
}
