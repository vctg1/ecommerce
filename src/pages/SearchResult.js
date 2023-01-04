import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../components/service-components/Title";
import HouseBox from "../components/service-components/HouseBox";
import SearchBar from "../components/home-components/SearchBar";

export default function SearchResult(props){
    let [search, setSearch] = useState(sessionStorage.getItem('pesquisa'));
    let [results, setResults] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(()=>{
        if(search){
        setResults(props.properties.filter(item=> 
            item.suburb.toLowerCase().includes(search.toLowerCase()) 
            || item.address.toLowerCase().includes(search)
            || item.price.toString().includes(search)
            || item.description.toLowerCase().includes(search.toLowerCase()) 
            ));
        }
        else{
            setResults(props.properties)
        }
    },[sessionStorage.getItem('pesquisa')])
    useEffect(()=>{
        if(results.length > 0){
            setLoading(false);
        }
        else{
        setTimeout(()=>setLoading(false), 3000)
        }
    },[results])
    return(
        <Grid>
            <SearchBar search={search} setSearch={setSearch}/>
        {results.length > 0 && !loading ?
            <>
            <Title title='Resultados da pesquisa para:' subtitle={sessionStorage.getItem('pesquisa')} />
            <Grid display='grid' columnGap='30px' rowGap='10px' gridTemplateColumns={`${props.matches ? '1fr 1fr 1fr' : '1fr'}`}>
                {results.map(item=>
                <HouseBox item={item} />
                )}
            </Grid>
                </>
            :<Box display='grid' justifyContent='center'>
            {loading?
                <CircularProgress size='10em' sx={{marginTop:'5em'}} />
                :<Title title='Não encontramos nenhum resultado para:' subtitle={sessionStorage.getItem('pesquisa')} />
            }
            </Box>}
        </Grid>
    )
}