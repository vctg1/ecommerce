import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Title from "../../components/service-components/Title";
import BuyHousesList from "../../components/service-components/BuyHousesList";
import SearchBar from "../../components/home-components/SearchBar";
import { Houses } from "../../components/ApiCrude";


export default function BuyService(props) {
  let [search, setSearch] = useState(props.search);
  let [properties, setProperties] = useState([]);
  async function FilterProperties() {
    properties = await Houses();
    if (search.length > 2) {
      setProperties(
        properties?.filter(
          (item) =>
            item.suburb.toLowerCase().includes(search.toLowerCase()) ||
            item.address.toLowerCase().includes(search) ||
            item.price.toString().includes(search) ||
            item.description.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setProperties(await Houses());
    }
  }
  useEffect(() => {
    FilterProperties();
  }, [search]);
  return (
    <Grid>
      <Title
        title="Comprar imóvel"
        subtitle="Encontre a melhor casa para você!"
      />
      <SearchBar search={search} setSearch={setSearch} />
      <Grid>
        <BuyHousesList properties={properties} matches={props.matches} />
      </Grid>
    </Grid>
  );
}
