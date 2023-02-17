import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from "react-router-dom";


export default function SearchBar(props){
    const navigate = useNavigate();
    let [blockSearch, setBlockSearch] = useState(false);
    let handleSubmit =e=>{
        e.preventDefault();
        navigate(`/pesquisa/${props.search}`);
    }
    let handleSubmitBlock=e=>{
        e.preventDefault()
    }
    useEffect(()=>{
        if(window.location.href.includes('pesquisa')
        || window.location.href.includes('alugar')
        ){
            setBlockSearch(true)
        }
    },[])
    return(
        <Grid style={{display:'flex', justifyContent:'center'}}>
                <form onSubmit={!blockSearch ? handleSubmit : handleSubmitBlock}>
                    <Box style={{display:'flex',borderRadius:'5px', backgroundColor:'white', justifyContent:'center',paddingLeft:'5px' , alignItems:'center', maxWidth:'350px'}}>
                        <TextField onChange={(e)=>{ 
                            props.setSearch(e.target.value);
                            sessionStorage.setItem('pesquisa', e.target.value)
                        }} 
                        style={{display:'flex', backgroundColor:'white', width:'350px'}}
                        variant="standard" value={props.search} label='Bairro, Endereço, Preço...'/>
                            <Box style={{display:'flex', alignItems:'center'}}>
                        {props.search?
                        <button type='reset' onClick={()=>{props.setSearch(''); sessionStorage.removeItem('pesquisa');}}  style={{backgroundColor:'white',height:'5vh',border:'none',cursor:'pointer'}}>
                            <ClearIcon sx={{color:'black'}}fontSize="small"/>
                        </button>
                        :<></>}
                            <Button size="fit-content" type="submit">
                            <SearchIcon sx={{color:'green'}} fontSize="medium"/>
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Grid>
    )
}