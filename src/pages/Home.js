import React from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import HomeCarousel from "../components/home-components/Carousel";
import EastIcon from '@mui/icons-material/East';
import HomeSearch from "../components/home-components/HomeSearch";
import { Link } from "react-router-dom";
import moldura from '../images/moldura.png'


export default function Home(props){
    return(
        <Grid>
            <HomeSearch/>
            <Grid display='grid' gridTemplateColumns={props.matches?'1fr 1.5fr':'1fr'} bgcolor='#eeeee4'>
                <Typography margin='30px' textAlign='end' fontSize='18px'>
                    Com a fonte mais completa de casas à venda e imóveis perto de você<br/>
                    <b>
                    Encontre aqui o imóvel dos seus sonhos!</b>
                    <br/>
                    Alguns de nossos imóveis disponíveis<br/>
                    <Link to='/comprar' target='_blank'>
                    <Button color="info">
                    <EastIcon sx={{fontSize:40}} />
                    </Button>
                    </Link>
                </Typography>
                <HomeCarousel properties={props.properties} matches={props.matches}/>
            </Grid>
        </Grid>
    )
}