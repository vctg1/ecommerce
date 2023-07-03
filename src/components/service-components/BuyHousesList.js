import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HouseBox from "./HouseBox";
import { Houses } from "../ApiCrude";

export default function BuyHousesList(props){
    let [properties, setProperties] = useState();
    async function SetProperties(){
        const response = await Houses()
        setProperties(response)
    }
    useEffect(()=>{
        SetProperties();
    },[])
    return(
        <Grid display='grid' margin='5%' columnGap='5%' rowGap='5%' gridTemplateColumns={`${props.matches ? '1fr 1fr 1fr' : '1fr'}`}>
            {properties?.map(item=>
            <HouseBox item={item} />
            )}
        </Grid>
        )
}