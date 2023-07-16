import { Grid } from "@mui/material";
import React from "react";
import EstimateTitle from "../../components/service-components/EstimateTitle";


export default function EstimateService(props){
    return(
        <Grid>
            <EstimateTitle matches={props.matches}/>
        </Grid>
    )
}