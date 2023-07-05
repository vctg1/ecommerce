import "./App.css";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Grid, useMediaQuery } from "@mui/material";
import { React, useEffect, useState } from "react";
import EstimateService from "./pages/EstimateService";
import BuyService from "./pages/BuyService";
import { Houses } from "./components/ApiCrude";
import SearchResult from "./pages/SearchResult";
import RentService from "./pages/RentService";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import RestrictedArea from "./pages/RestrictedArea";

export default function App() {
  const matches = useMediaQuery("(min-width:800px)");
  let [search, setSearch] = useState("");
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
      <BrowserRouter basename={`/ecommerce`}>
        <Header fixed={fixedState} matches={matches} />
        <Grid
          style={{
            padding: `${matches || !fixedState ? "10px" : "10vh 10px"}`,
            minHeight: "33.1rem",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home search={search} setSearch={setSearch} matches={matches} />
              }
            />
            <Route
              path="/estimar-casa"
              element={<EstimateService matches={matches} />}
            />
            <Route
              path="/comprar"
              element={
                <BuyService
                  search={search}
                  setSearch={setSearch}
                  matches={matches}
                />
              }
            />
            <Route
              path="/alugar"
              element={
                <RentService
                  search={search}
                  setSearch={setSearch}
                  matches={matches}
                />
              }
            />
            <Route
              path={`/pesquisa/${search}`}
              element={
                <SearchResult
                  search={search}
                  setSearch={setSearch}
                  matches={matches}
                />
              }
            />
            <Route path={`/login`} element={<Login matches={matches} />} />
          </Routes>
        </Grid>
        <Footer matches={matches} />
      </BrowserRouter>
      <BrowserRouter basename={`/area-restrita`}>
        <Routes>
        <Route path={`/`} element={<RestrictedArea matches={matches} />} />
        </Routes>
      </BrowserRouter>
    </Grid>
  );
}
