import './App.css';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import { Grid, useMediaQuery } from '@mui/material';
import { React, useEffect, useState } from 'react';
import EstimateService from './pages/EstimateService';

export default function App() {
  const matches = useMediaQuery('(min-width:800px)');
  let [fixed, setFixed] = useState(false);
  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }
    window.addEventListener("scroll", posicaoScroll);
    return () => window.removeEventListener("scroll", posicaoScroll);
  }, []);
  return (
    <Grid>
      <BrowserRouter basename={`/`}>
        <Header fixed={fixed} matches={matches}/>
        <Grid style={{padding:`${matches||!fixed?'10px':'10vh 10px'}`}}>
        <Routes>
          <Route path='/' element={<Home matches={matches} />}/>
          <Route path='/estimar-casa' element={<EstimateService/>}/>
        </Routes>
        </Grid>
      </BrowserRouter>
    </Grid>
  );
}
