import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function HouseBox(props){
    let [price, setPrice] = useState(props.item.price)
    let [purchaseType, setPurchaseType] = useState('')
    useEffect(()=>{
        if(window.location.href.includes('alugar')){
            setPrice(props.item.rent);
            setPurchaseType(' - Aluguel');
        }
    },[])
    return(
        <Box display='grid' justifyContent='center' borderRadius='15px' bgcolor={'#eeeee4'}>
            <img src={props.item.images.image1} width='100%' style={{justifySelf:'center', borderRadius:'15px 15px 0 0'}}>
            </img>
            <Typography component='ul' style={{listStylePosition:'inside'}}>
                <Typography variant="h5">
                    {props.item.suburb}
                </Typography>
                <Typography component='li'>
                    {props.item.address}
                </Typography>
                <Typography component='li'>
                    {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    {purchaseType}
                </Typography>
                <Typography component='li'>
                    {props.item.description}
                </Typography>
            </Typography>
        </Box>
    )
}