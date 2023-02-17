import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../components/service-components/Title";
import BuyHousesList from "../components/service-components/BuyHousesList";
import SearchBar from '../components/home-components/SearchBar'

export default function RentService(props){
    let [search, setSearch] = useState(props.search);
    let [properties, setProperties] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(()=>{
        if(search){
        setProperties(props.properties.filter(item=> item.rent &&(
            item.suburb.toLowerCase().includes(search.toLowerCase()) 
            || item.address.toLowerCase().includes(search)
            || item.rent.toString().includes(search)
            || item.description.toLowerCase().includes(search.toLowerCase()) )
            ));
        }
        else{
            setProperties(props.properties.filter(item=>item.rent))
        }
    },[sessionStorage.getItem('pesquisa')])
    useEffect(()=>{
        if(properties.length > 0){
            setLoading(false);
        }
        else{
        setTimeout(()=>setLoading(false), 3000)
        }
    },[properties])
    return(
        <Grid>
            {search && properties.length < 1?
            <></>
            :<Title title='Alugar imóvel' subtitle='Encontre sua moradia!' />}
            <SearchBar search={search} setSearch={setSearch}/>
            {search && properties.length < 1? 
            <Title title='Não encontramos nenhum resultado para:' subtitle={sessionStorage.getItem('pesquisa')} />
            :<></>
            }
            <Grid marginTop='1em'>
                <BuyHousesList matches={props.matches} properties={properties}/>
            </Grid>
        </Grid>
    )
}