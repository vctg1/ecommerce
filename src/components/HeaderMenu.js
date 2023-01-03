import { Box, Button, Collapse, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderMenu(props){
    let [mouseIn, setMouseIn] = useState(false);
    let [activeId, setActiveId] = useState(0);
    let routes = [
        {
            id:1,
            menu:false,
            text:'Home',
            page:'',
            child:''
        },
        {
            id:2,
            menu:true,
            text:'Serviços',
            page:'servicos',
            children:[
                {
                    text:'comprar',
                    page:'comprar' 
                },
                {
                    text:'vender',
                    page:'vender' 
                    },
                {
                    text:'alugar',
                    page:'alugar' 
                },
                {
                    text:'Estime sua casa',
                    page:'estimar-casa' 
                },
            ]
        },
        {
            id:4,
            menu:false,
            text: 'Contato',
            page: 'contato',
            child:''
        },
        {
            id:5,
            menu:false,
            text: 'Sobre',
            page: 'sobre',
            child:''
        },
    ]
    return(
        <Collapse in={props.handleClick || props.matches} style={{gridColumn:'1 / span 2'}}>
            {
                routes.map(item => 
                <Box display={props.matches?'inline-flex':''}>
                {!item.menu?   
                    <Link style={{textDecoration:'none', display:'flex', justifyContent:'center'}} to={`/${item.page}`}>
                            <Typography style={{margin:`${props.matches?'0 10px 0 10px':'10px 0 10px 0'}`, color:'white'}}>
                                {item.text}
                            </Typography>
                    </Link>:
                    <Box onMouseEnter={()=>{setActiveId(item.id); setMouseIn(true)}} onMouseLeave={()=> setMouseIn(false)} 
                    style={{
                        textDecoration:'none', 
                        display:'flex', 
                        justifyContent:'center', 
                        flexDirection:'column',
                        textAlign:'center',
                        height:`${props.matches?'5vh':''}`
                        }}>
                            <Typography style={{cursor:'context-menu', color:'white',margin:`${props.matches?'0 10px 0 10px':'10px 0 10px 0'}`}}>
                                {item.text}
                            </Typography>
                            <Box>
                            <Paper 
                            style={{ 
                                display:'grid',
                                visibility:`${mouseIn && activeId===item.id?'':'hidden'}`,
                                padding:'5px', 
                                minWidth:`${props.matches?'':'90vw'}`,
                                position:'absolute',
                                gridTemplateColumns:'1fr 1fr'
                                }}>
                                {item.children.map(child => 
                                <Link style={{textDecoration:'none'}} to={`/${child.page}`}>
                                    <Button>
                                        <b>
                                    {child.text}
                                        </b>
                                    </Button>
                                </Link>
                                )}
                            </Paper>
                            </Box>
                    </Box>
                }
                </Box>
                )
            }
        </Collapse>
    )
}