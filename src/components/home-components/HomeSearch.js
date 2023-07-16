import { Paper, Typography} from '@mui/material';
import houseBackground from '../../images/houseBackground.png'
import SearchBar from './SearchBar';


export default function HomeSearch(props) {
    return(
        <Paper style={{
            backgroundImage: `url(${houseBackground})`, 
            backgroundPosition: 'center',
            minHeight:'33rem',
            backgroundSize:'cover'
            }}>  
            <Typography variant={props.matches? 'h3':'h4'} paddingY='2vh' textAlign='center' color='white' fontFamily='serif'>
                <b>
                À cada um, seu próprio lar.
                </b>
            </Typography>
            <Typography variant='h6' margin='1vh 5vw 10vh 5vw' textAlign='center' color='white' fontFamily='arial'>
                <b>Vamos encontrar uma casa perfeita para você!</b>
            </Typography>
            <SearchBar search={props.search} setSearch={props.setSearch} />
        </Paper>
    )
}