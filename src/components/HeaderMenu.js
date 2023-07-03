import { Box, Button, Collapse, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderMenu(props) {
  let [mouseIn, setMouseIn] = useState(false);
  let [activeId, setActiveId] = useState(0);
  function handleMouse(e) {
    setMouseIn(true);
    setActiveId(e.id);
  }
  let handleMouseOut = (e) => {
    e.preventDefault();
    setMouseIn(false);
  };
  let routes = [
    {
      id: 1,
      menu: false,
      text: "Home",
      page: "",
      children: "",
    },
    {
      id: 2,
      menu: true,
      text: "Serviços",
      page: "servicos",
      children: [
        {
          text: "comprar",
          page: "comprar",
        },
        {
          text: "alugar",
          page: "alugar",
        },
      ],
    },
    {
      id: 4,
      menu: false,
      text: "Entrar em contato",
      page: "contato",
      children: "",
    },
    {
      id: 5,
      menu: false,
      text: "Sobre",
      page: "sobre",
      children: "",
    },
    {
        id: 6,
        menu: false,
        text: "Login",
        page: "login",
        children: "",
      }
  ];
  return (
    <Collapse
      in={props.handleClick || props.matches}
      style={{
        gridColumn: "1 / span 2",
        position: `${props.matches ? "" : "absolute"}`,
        backgroundColor: `${props.matches ? "" : "white"}`,
      }}
      orientation={props.matches ? "" : "horizontal"}
    >
      {routes.map((item) => (
        <Box
          display={"inline-block"}
          width={props.matches ? "max-content" : "90vw"}
          padding={props.matches ? "0" : "10px"}
        >
          {!item.menu ? (
            <Link
              style={{ textDecoration: "none", display: "grid" }}
              to={`/${item.page}`}
            >
              <Typography
                variant="button"
                onMouseOver={() => handleMouse(item)}
                onMouseOut={handleMouseOut}
                style={{
                  margin: `${props.matches ? "0 3em 0 3em" : "10px 0 10px 0"}`,
                  color: `${
                    mouseIn && activeId === item.id ? "#537FE7" : "black"
                  }`,
                  fontWeight: "bold",
                  textDecoration: `${
                    mouseIn && activeId === item.id ? "underline" : ""
                  }`,
                }}
              >
                {item.text}
              </Typography>
            </Link>
          ) : (
            <Box
              onMouseOver={() => handleMouse(item)}
              onMouseOut={handleMouseOut}
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                height: `${props.matches ? "5vh" : ""}`,
              }}
            >
              <Typography
                variant="button"
                style={{
                  cursor: "context-menu",
                  color: `${
                    mouseIn && activeId === item.id ? "#537FE7" : "black"
                  }`,
                  fontWeight: "bold",
                  textDecoration: `${
                    mouseIn && activeId === item.id ? "underline" : ""
                  }`,
                  margin: `${props.matches ? "0 1em 0 1em" : "10px 0 10px 0"}`,
                }}
              >
                {item.text}
              </Typography>
              <Box>
                <Collapse
                  in={mouseIn && activeId === item.id}
                  style={{
                    backgroundColor: "white",
                    transition: "100ms",
                    padding: "5px",
                    position: `${props.matches ? "absolute" : "relative"}`,
                    marginLeft: ".5em",
                  }}
                >
                  {item.children.map((child) => (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/${child.page}`}
                    >
                      <Button color="secondary" margin={"10px"}>
                        <b>{child.text}</b>
                      </Button>
                    </Link>
                  ))}
                </Collapse>
              </Box>
            </Box>
          )}
        </Box>
      ))}
    </Collapse>
  );
}
