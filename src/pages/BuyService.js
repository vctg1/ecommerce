import { Grid } from "@mui/material";
import React, { useState } from "react";
import Title from "../components/service-components/Title";
import BuyHousesList from "../components/service-components/BuyHousesList";
import SearchBar from '../components/home-components/SearchBar'

export default function BuyService(props){
    return(
        <Grid>
            <Title title='Comprar imóvel' subtitle='Encontre a melhor casa para você!' />
            <SearchBar search={props.search} setSearch={props.setSearch}/>
            <Grid>
                <BuyHousesList matches={props.matches}/>
            </Grid>
        </Grid>
    )
}