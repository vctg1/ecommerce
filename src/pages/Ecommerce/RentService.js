import {Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../../components/service-components/Title";
import BuyHousesList from "../../components/service-components/BuyHousesList";
import SearchBar from "../../components/home-components/SearchBar";
import { Houses } from "../../components/ApiCrude";

export default function RentService(props) {
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
      {search && properties?.length < 1 ? (
        <></>
      ) : (
        <Title title="Alugar imóvel" subtitle="Encontre sua moradia!" />
      )}
      <SearchBar search={search} setSearch={setSearch} />
      {search && properties?.length < 1 ? (
        <Title
          title="Não encontramos nenhum resultado para:"
          subtitle={sessionStorage.getItem("pesquisa")}
        />
      ) : (
        <></>
      )}
      <Grid marginTop="1em">
        <BuyHousesList matches={props.matches} properties={properties} />
      </Grid>
    </Grid>
  );
}
