import { Grid } from "@mui/material";
import React from "react";
import Title from "../components/service-components/Title";
import BuyHousesList from "../components/service-components/BuyHousesList";

export default function BuyService(props){
    return(
        <Grid>
            <Title title='Comprar imóvel' subtitle='Encontre a melhor casa para você!' />
            <BuyHousesList matches={props.matches} properties={props.properties}/>
        </Grid>
    )
}