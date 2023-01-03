import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function BuyHousesList(props){
    return(
        <Grid display='grid' columnGap='30px' rowGap='10px' gridTemplateColumns={`${props.matches ? '1fr 1fr 1fr' : '1fr'}`}>
            {props.properties.map(item=>
            <Box display='grid' justifyContent='center' borderRadius='15px' bgcolor={'#eeeee4'}
            >
                <img src={item.images.image1} width='100%' style={{justifySelf:'center', borderRadius:'15px 15px 0 0'}}>
                </img>
                <Typography component='ul' style={{listStylePosition:'inside'}}>
                    <Typography variant="h5">
                        {item.suburb}
                    </Typography>
                    <Typography component='li'>
                        {item.address}
                    </Typography>
                    <Typography component='li'>
                        {item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    </Typography>
                    <Typography component='li'>
                        {item.description}
                    </Typography>
                </Typography>
            </Box>
            )}
        </Grid>
        )
}