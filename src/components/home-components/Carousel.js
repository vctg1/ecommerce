import React, { useEffect, useState } from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, useMediaQuery, Box } from '@mui/material'
import moldura from '../../images/moldura.png'
import { Link } from "react-router-dom";
import { Houses } from "../ApiCrude";


export default function HomeCarousel(props){
    let [properties, setProperties] = useState();
    async function SetProperties(){
        const response = await Houses()
        setProperties(response.filter(prop => prop.images[0]))
    }
    useEffect(()=>{
        SetProperties();
    },[])
    useEffect(()=>{
        console.log(properties);
    },[properties])
    return (
        <Carousel navButtonsAlwaysVisible={props.matches} animation="fade" duration='500'>
            {
                properties?.slice(0,5).map( (item, i) => 
                    <Box style={{
                        opacity:'.9',
                        backgroundImage:`url('${item.images[0].image.url}')`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        backgroundPosition:'center',
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