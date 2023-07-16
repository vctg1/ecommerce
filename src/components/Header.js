import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Button } from "@mui/material";
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
          position: `${!props.fixed || props.matches ? "absolute" : "fixed"}`,
          zIndex:2000
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
            <img height="60vh" src={logo} alt="" />
          </Link>
        </Box>
        <Box
          visibility={handleClick && !props.matches ? "hidden" : "visible"}
          position={props.matches ? "" : "absolute"}
          display="grid"
          justifyContent={"center"}
        >
          <HeaderMenu handleClick={handleClick} matches={props.matches} />
        </Box>
      </Grid>
    </Grid>
  );
}
