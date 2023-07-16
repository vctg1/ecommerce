import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "../components/Header";
import Home from "../pages/Ecommerce/Home";
import EstimateService from "../pages/Ecommerce/EstimateService";
import BuyService from "../pages/Ecommerce/BuyService";
import RentService from "../pages/Ecommerce/RentService";
import SearchResult from "../pages/Ecommerce/SearchResult";
import Login from "../pages/Ecommerce/Login";
import Footer from "../components/Footer";


export default function Ecommerce(props){
    const [search, setSearch] = useState("");
    const fixedState = props.fixedState;
    const matches = props.matches;
    return(
    <BrowserRouter basename={`/ecommerce`} >
      <Grid display='grid' style={{minHeight:'100vh'}} >
        <Header fixed={fixedState} matches={matches} />
        <Grid
          style={{
            padding: `${matches ? "9rem 10px 0 10px" : "6rem 10px 0 10px"}`
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
        </Grid>
      </BrowserRouter>)
}