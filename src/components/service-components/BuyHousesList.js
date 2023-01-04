import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import HouseBox from "./HouseBox";

export default function BuyHousesList(props){
    return(
        <Grid display='grid' columnGap='30px' rowGap='10px' gridTemplateColumns={`${props.matches ? '1fr 1fr 1fr' : '1fr'}`}>
            {props.properties.map(item=>
            <HouseBox item={item} />
            )}
        </Grid>
        )
}