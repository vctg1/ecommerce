import React from "react";
import { Grid, Typography, useMediaQuery } from '@mui/material';
import HomeCarousel from "../components/home-components/Carousel";
import EastIcon from '@mui/icons-material/East';
import HomeSearch from "../components/home-components/HomeSearch";

export default function Home(){
    const matches = useMediaQuery('(min-width:600px)');
    return(
        <Grid>
            <HomeSearch/>
                <Grid display='grid' gridTemplateColumns={matches?'1fr 1fr':'1fr'} bgcolor='#eeeee4'>
                <Typography margin='30px' textAlign='end' fontSize='18px'>
                    Com a fonte mais completa de casas à venda e imóveis perto de você<br/>
                    <b>
                    Encontre aqui o imóvel dos seus sonhos!</b>
                    <br/>
                    Alguns de nossos imóveis disponíveis<br/> <EastIcon sx={{fontSize:40}} />
                </Typography>
                <HomeCarousel/>
            </Grid>
        </Grid>
    )
}