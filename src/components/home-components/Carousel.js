import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, useMediaQuery } from '@mui/material'
import casa1 from '../../images/casa1.jpg'
import casa2 from '../../images/casa2.jpg'
import casa3 from '../../images/casa3.jpg'
import casa4 from '../../images/casa4.jpg'
import casa5 from '../../images/casa5.jpg'
import casa6 from '../../images/casa6.jpg'
import { Link } from "react-router-dom";


export default function HomeCarousel(){
    const matches = useMediaQuery('(min-width:600px)');
    var items = [
        {
            id: "1",
            img: casa1
        },
        {
            id: "2",
            img: casa2
        },
        {
            id: "3",
            img: casa3
        },
        {
            id: "4",
            img: casa4
        },
        {
            id: "5",
            img: casa5
        },
        {
            id: "6",
            img: casa6
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => 
                <Link to={`/servicos`}>
                        <img style={{maxHeight:`${matches?'70vh':'28vh'}`}} src={item.img}/>
                </Link>
                )
            }
        </Carousel>
    )

}