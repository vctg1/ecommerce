import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function HouseBox(props){
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
                    {props.item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </Typography>
                <Typography component='li'>
                    {props.item.description}
                </Typography>
            </Typography>
        </Box>
    )
}