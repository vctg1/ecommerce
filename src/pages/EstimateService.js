import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import EstimateTitle from "../components/service-components/EstimateTitle";


export default function EstimateService(){
    const matches = useMediaQuery('(min-width:600px)');
    return(
        <Grid>
            <EstimateTitle matches={matches}/>
        </Grid>
    )
}