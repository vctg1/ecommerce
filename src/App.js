import './App.css';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import { Grid, useMediaQuery } from '@mui/material';
import { React, useEffect, useState } from 'react';
import EstimateService from './pages/EstimateService';
import BuyService from './pages/BuyService';
import {houses} from './components/PropertyImports'

export default function App() {
  let properties = houses();
  const matches = useMediaQuery('(min-width:800px)');
  let [fixedState, setFixedState] = useState(false);
  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 100) {
        setFixedState(true);
      } else {
        setFixedState(false);
      }
    }
    window.addEventListener("scroll", posicaoScroll);
    return () => window.removeEventListener("scroll", posicaoScroll);
  }, []);
  return (
    <Grid>
      <BrowserRouter basename={`/`}>
        <Header fixed={fixedState} matches={matches}/>
        <Grid style={{padding:`${matches||!fixedState?'10px':'10vh 10px'}`}}>
        <Routes>
          <Route path='/' element={<Home properties={properties} matches={matches} />}/>
          <Route path='/estimar-casa' element={<EstimateService matches={matches}/>}/>
          <Route path='/comprar' element={<BuyService properties={properties} matches={matches}/>}/>
        </Routes>
        </Grid>
      </BrowserRouter>
    </Grid>
  );
}
