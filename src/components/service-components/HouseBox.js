import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HouseBox(props){
    const navigate = useNavigate();
    let [price, setPrice] = useState(props.item.price);
    let [mouseOver, setMouseOver] = useState(false);
    let handleMouse =e=>{
        e.preventDefault();
        setMouseOver(true)
    }
    let handleMouseOut =e=>{
        e.preventDefault();
        setMouseOver(false)
    }
    let handleClick =e=>{
        e.preventDefault();
        navigate('/');
    }
    let [purchaseType, setPurchaseType] = useState('')
    useEffect(()=>{
        if(window.location.href.includes('alugar')){
            setPrice(props.item.rent);
            setPurchaseType(' - Aluguel');
        }
    },[])
    return(
        <Paper style={{scale:mouseOver?'110%':'', transition:'100ms'}} elevation={10} display='grid' justifyContent='center' bgcolor={'#eeeee4'}>
            <img onClick={handleClick} onMouseOver={handleMouse} onMouseOut={handleMouseOut} 
                src={props.item.images.image1} width='100%'
                style={{
                    maxHeight:'60%',
                    opacity:'.9',
                    cursor:'pointer',
                    justifySelf:'center', 
                    borderRadius:'5px 5px 0 0'}}>
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
        </Paper>
    )
}