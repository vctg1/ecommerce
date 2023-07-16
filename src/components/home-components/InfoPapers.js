import { Grid } from "@mui/material";
import React from "react";
import HomePaper from "./HomePaper";

export default function InfoPapers(props){
    let papers = [{
        id:1,
        title:'Imóveis novos!',
        subtitle:'Veja as informações dos planos para promover seu empreendimento.',
        image:'https://img10.naventcdn.com/home/RPHOM-REDv4.52.0-RC1/publicador-emp.1e42b2.svg'
    },
    {
        id:2,
        title:'Garantia Locatícia',
        subtitle:'Coberturas que protegem o imóvel, o proprietário e o inquilino.',
        image:'https://img10.naventcdn.com/home/RPHOM-REDv4.52.0-RC1/garantia-fianza.eb1b29.svg'
    },
    {
        id:3,
        title:'Fale conosco',
        subtitle:'Acesse nosso contato, email, telefones e tire todas suas dúvidas.',
        image:'https://img10.naventcdn.com/home/RPHOM-REDv4.52.0-RC1/conoce-portal.75f371.svg'
    },
    ]
    return(
        <Grid display='grid' columnGap='5em' rowGap='2em' margin='5%' gridTemplateColumns={props.matches?'1fr 1fr 1fr':'1fr'}>
            {papers.map((item, key)=>
            <HomePaper key={key} item={item} />)}
        </Grid>
    )
}