import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Title(props){
    return(
        <Typography style={{textAlign:'center'}}>
            <h1>
            {props.title}
            </h1>
            <h2>
            {props.subtitle}
            </h2>
        </Typography>
    )
}