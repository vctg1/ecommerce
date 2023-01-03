import React, { useEffect, useState } from "react";
import { Grid, Typography, TextField, Box, Button, Paper } from '@mui/material';
import houseBackground from '../../images/houseBackground.jpg'
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';


export default function HomeSearch() {
    let [search, setSearch] = useState('');
    return(
        <Grid style={{backgroundImage: `url(${houseBackground})`, backgroundPosition: 'center',minHeight:'70vh' }}>  
            <Typography marginX='30px' textAlign='center' color='white' fontFamily='serif'>
                <h1 style={{margin:0}}>À cada um, seu próprio lar.</h1>
                <h2>
                Imóveis à venda e locação em Brasília/DF
                </h2>
            </Typography>
            <Typography margin='5vh 0 15vh 0' textAlign='center' color='white' fontFamily='arial'>
                <h2>
                <b>Vamos encontrar uma casa perfeita para você!</b>
                </h2>
            </Typography>
            <Grid style={{display:'flex', justifyContent:'center'}}>
                <Box style={{display:'flex',borderRadius:'5px', backgroundColor:'white', justifyContent:'center',paddingLeft:'5px' , alignItems:'center', maxWidth:'350px'}}>
                    <TextField onChange={(e)=>setSearch(e.target.value)} 
                    style={{display:'flex', backgroundColor:'white', width:'350px'}}
                    variant="standard" value={search} label='Estado, Cidade, Cep ou Bairro'/>
                        <Box style={{display:'flex', alignItems:'center'}}>
                    {search?
                    <button onClick={()=>setSearch('')}  style={{backgroundColor:'white',height:'5vh',border:'none',cursor:'pointer'}}>
                        <ClearIcon sx={{color:'black'}}fontSize="small"/>
                    </button>
                    :<></>}
                            <Button>
                            <SearchIcon sx={{color:'green'}} fontSize="large"/>
                            </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}