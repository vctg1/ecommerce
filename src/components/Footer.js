import React, { useState } from "react";
import { Box, Grid, Typography, Collapse, Button } from "@mui/material";
import HouseIcon from '@mui/icons-material/House';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

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
        <Grid style={{ paddingLeft: props.matches?'10rem':'2rem',
            color:'white', 
            backgroundImage: "linear-gradient(purple, #330044)"
            }}>
            <Box>
            <HouseIcon/>
            <b>RentHouse</b>
            </Box>
            <Grid display={props.matches?'grid':''} 
                gridTemplateColumns={'1fr 1fr 1fr 1fr'}
            >
            {props.matches? columns.map((col)=>
                <Box display={col.column?'grid':''} 
                    height='max-content'
                >
                <Typography variant="h5" marginY={props.matches?'2rem':''}>
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
                    <Box>
                        <Button onClick={()=>handleMouse(col)} style={{border:'none', 
                            background:'none', 
                            fontSize:'medium',
                            color:'white'
                            }}>
                            <b>{col.title}</b>
                        </Button>
                        <Collapse in={open === col.id}>
                        {col.items.map((item)=>
                        <Grid marginLeft={'1rem'}>
                            <a href='/ecommerce' style={{
                                textDecoration:'none',
                                color:'white',
                                marginBottom:'1rem'
                            }}>
                                {item}
                            </a>
                            </Grid>
                            )}
                        </Collapse>
                    </Box>
                )
            }
            </Grid>
        </Grid>
    )
}