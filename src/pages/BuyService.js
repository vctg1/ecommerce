import { Grid } from "@mui/material";
import React from "react";
import BuyTitle from "../components/service-components/BuyTitle";
import BuyHousesList from "../components/service-components/BuyHousesList";



export default function BuyService(props){
    return(
        <Grid>
            <BuyTitle/>
            <BuyHousesList matches={props.matches} properties={props.properties}/>
        </Grid>
    )
}