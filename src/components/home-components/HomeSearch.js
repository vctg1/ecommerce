import { Grid, Typography} from '@mui/material';
import houseBackground from '../../images/houseBackground.jpg'
import SearchBar from './SearchBar';


export default function HomeSearch(props) {
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
            <SearchBar search={props.search} setSearch={props.setSearch} />
        </Grid>
    )
}