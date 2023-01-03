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
                <Link target='_blank' to={item.images.image1}>
                    <Box style={{
                    backgroundImage:`url('${item.images.image1}')`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'110%',
                    minHeight:`${!props.matches?'25vh':'70vh'}`
                    }}>
                        <img src={moldura} style={{
                            width:'100%',
                            height:'90%'
                        }}/>
                    </Box>
                </Link>
                )
            }
        </Carousel>
    )

}