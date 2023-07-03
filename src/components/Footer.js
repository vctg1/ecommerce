import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Collapse, Button, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import HouseIcon from '@mui/icons-material/House';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Footer(props){
    let columns = [{
        id:1,    
        title: "Mais RentHouse",
            items: [
            'Buscar imóveis',
            'Anunciar',
            'Trabalhe conosco',
            'Central de ajuda'
            ],
            column: true
        },
        {
            id:2,
            title: "Anunciantes",
            items: [
            'Corretores',
            'Construtoras'
            ],
            column: true
        },
        {
            id:3,
            title: "Países",
            items: [
            'Argentina',
            'Brasil',
            'Perú',
            'Equador'
            ],
            column: true
        },
        {
            id:4,
            title: "Siga-nos",
            items: [
            <InstagramIcon/>,
            <FacebookIcon/>
            ],
            column: false
        },
    ]
    let [open, setOpen] = useState(0)
    function handleMouse(e){
        if(open!==e.id){
        setOpen(e.id)
        }
        else{setOpen(0)}
    }
    return(
        <Grid style={{ paddingLeft: props.matches?'10rem':'',
            color:'white', 
            backgroundImage: "linear-gradient(purple, #330044)"
            }}>
            <Typography variant="h5" textAlign={props.matches?'':'center'}>
            <HouseIcon/>
            <b>RentHouse</b>
            </Typography>
            <Grid display={props.matches?'grid':''} 
                gridTemplateColumns={'1fr 1fr 1fr 1fr'}
            >
            {props.matches? columns.map((col)=>
                <Box display={col.column?'grid':''} 
                    height='max-content'
                >
                <Typography variant="h6" 
                marginY={props.matches?'2rem':''}>
                    <b>{col.title}</b>
                </Typography>
                {col.items.map((item)=>
                <a href='/ecommerce' style={{
                    textDecoration:'none',
                    color:'white',
                    marginBottom:'1rem'
                    }}>
                    {item}
                </a>
                    )}
                </Box>
            )
                    :columns.map((col)=>
                    <Accordion
                        style={{
                            color:'white', 
                            backgroundColor: 'transparent'
                        }}
                    >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon color="white" />}
                        style={{fontSize:'medium'}}>
                            <Typography>
                                <b>{col.title}</b>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        {col.items.map((item)=>
                        <Grid marginLeft={'1rem'} display={col.column?'grid':'inline-grid'}>
                            <a href='/ecommerce' style={{
                                textDecoration:'none',
                                marginBottom:'1rem',
                                color:'white'
                            }}>
                                {item}
                            </a>
                            </Grid>
                            )}
                        </AccordionDetails>
                        </Accordion>
                )
            }
            </Grid>
        </Grid>
    )
}