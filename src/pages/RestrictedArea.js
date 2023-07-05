import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import RestAreaHeader from "../components/rest-area-components/RestAreaHeader";
import { GetCustomerByCpf } from "../components/ApiCrude";

export default function RestrictedArea(){
    const login = sessionStorage.getItem('login');
    const [costumer, setCostumer] = useState();
    async function LoadCostumer(){
        const response = await GetCustomerByCpf(login);
        if(response){
            setCostumer(response[0])
            console.log(response[0])
        }
    }
    useEffect(()=>{
        LoadCostumer();
    },[])
    return(
        <Grid>
            <RestAreaHeader costumer={costumer} />            
        </Grid>
    )
}
