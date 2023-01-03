import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { Grid, Box, Button, Typography, AppBar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.png';
import HeaderMenu from "./HeaderMenu";

export default function Header(props){
    let [handleClick, setHandleClick] = useState(false);
    function Open(){
        setHandleClick(!handleClick);
    }
    return(
        <Grid>
            <AppBar style={{transitionDelay:'300ms'}} position={`${!props.fixed || props.matches?'static':'fixed'}`}>
                <Box margin='10px' display={props.matches?'inline-flex':'grid'} gridTemplateColumns='auto auto' columnGap={props.matches?'':'30vw'} alignItems='center'>
                    <Link to={'/'}>
                        <img height='60vh' src={logo}/>
                    </Link>
                        { !props.matches ? <Button onClick={()=>Open()} style={{color:'white'}}><MenuIcon/></Button>:<></>}
                    <HeaderMenu handleClick={handleClick} matches={props.matches}/>
                </Box>
            </AppBar>
        </Grid>
    )
}