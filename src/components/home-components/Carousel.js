import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, useMediaQuery, Box } from '@mui/material'
import moldura from '../../images/moldura.png'
import { Link } from "react-router-dom";


export default function HomeCarousel(props){
    return (
        <Carousel navButtonsAlwaysVisible={props.matches} animation="fade" duration='500'>
            {
                props.properties.map( (item, i) => 
                    <Box style={{
                        opacity:'.9',
                        backgroundImage:`url('${item.images.image1}')`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        minHeight:`${!props.matches?'25vh':'70vh'}`,
                        borderRadius:'5px'
                    }}>
                        <img src={moldura} width='100%'/>
                    </Box>
                )
            }
        </Carousel>
    )

}