import "./App.css";
import { Grid, useMediaQuery } from "@mui/material";
import { React, useEffect, useState } from "react";
import Ecommerce from './routes/Ecommerce'
import RestrictedArea from './routes/RestrictedArea'

export default function App() {
  const matches = useMediaQuery("(min-width:800px)");
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
      <Ecommerce fixedState={fixedState} matches={matches}/>
      <RestrictedArea matches={matches} />
    </Grid>
  );
}
