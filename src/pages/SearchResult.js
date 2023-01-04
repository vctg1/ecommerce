import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../components/service-components/Title";
import SearchBar from "../components/home-components/SearchBar";
import BuyHousesList from "../components/service-components/BuyHousesList"

export default function SearchResult(props){
    let [search, setSearch] = useState(props.search);
    let [properties, setProperties] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(()=>{
        if(search){
        setProperties(props.properties.filter(item=> 
            item.suburb.toLowerCase().includes(search.toLowerCase()) 
            || item.address.toLowerCase().includes(search)
            || item.price.toString().includes(search)
            || item.description.toLowerCase().includes(search.toLowerCase()) 
            ));
        }
        else{
            setProperties(props.properties)
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
            <SearchBar search={search} setSearch={setSearch}/>
            {properties.length > 0 && !loading ?
            <Grid>
                <Title title='Resultados da pesquisa para:' subtitle={sessionStorage.getItem('pesquisa')} />
                <BuyHousesList properties={properties} matches={props.matches}/>
            </Grid>
            :<Box display='grid' justifyContent='center'>
            {loading?
                <CircularProgress size='10em' sx={{marginTop:'5em'}} />
                :<Title title='Não encontramos nenhum resultado para:' subtitle={sessionStorage.getItem('pesquisa')} />
            }
            </Box>}
        </Grid>
    )
}