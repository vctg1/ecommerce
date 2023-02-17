import React, { useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";



export default function HomePaper(props){
    let [mouseOver, setMouseOver]=useState(false);
    let handleMouse =e=>{
        setMouseOver(true);
    }
    let handleMouseOut=e=>{
        setMouseOver(false);
    }
    return(
        <Paper elevation={mouseOver?10:3}>
            <Grid onMouseOver={handleMouse} onMouseOut={handleMouseOut} display='grid' padding='1em' gridTemplateColumns={'1fr 3fr'} >
                <img style={{alignSelf:'center'}} src={props.item.image}/>
                <Box>
                <Typography variant="h5">
                {props.item.title}
                </Typography>
                <Typography variant="p">
                {props.item.subtitle}
                </Typography>
                </Box>
            </Grid>
        </Paper>
    )
}