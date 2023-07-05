import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Button, Typography, AppBar, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/logo.png";
import HeaderMenu from "./HeaderMenu";

export default function Header(props) {
  let [handleClick, setHandleClick] = useState(false);
  function Open() {
    setHandleClick(!handleClick);
  }
  return (
    <Grid>
      <Grid
        style={{
          transitionDelay: "300ms",
          backgroundColor: "white",
          position: `${!props.fixed || props.matches ? "static" : "fixed"}`,
        }}
        width="100%"
      >
        <Box
          display={"inline-flex"}
          justifyContent={props.matches ? "center" : "space-between"}
          width={props.matches ? "50%" : "65%"}
          margin={props.matches ? "1em" : "1em 0 1em 0"}
        >
          {!props.matches ? (
            <Button onClick={() => Open()}>
              <MenuIcon />
            </Button>
          ) : (
            ""
          )}
          <Link to={"/"}>
            <img height="60vh" src={logo} />
          </Link>
        </Box>
        <Box display="flex" justifyContent={"center"}>
          <HeaderMenu handleClick={handleClick} matches={props.matches} />
        </Box>
      </Grid>
    </Grid>
  );
}
