import { Grid, Typography } from "@mui/material";
import React from "react";

export default function EstimateTitle(props){
    let matches = props.matches;
    return(
        <Grid display={'flex'} justifyContent={'center'} bgcolor='#eeeee4' padding={'5px'}>
            <Typography style={{maxWidth:`${matches?'50vw':''}`}} color={'black'} textAlign='center'>
                <h1 style={{fontSize:`${matches?'60px':'45px'}`, margin:'0'}}>
                Estime o valor da sua casa
                </h1>
                <h2 style={{fontWeight:'normal'}}>
                Descubra quanto vale sua casa com várias estimativas de avaliação e acompanhe seu patrimônio em relação às tendências do mercado.
                </h2>
            </Typography>
        </Grid>
    )
}