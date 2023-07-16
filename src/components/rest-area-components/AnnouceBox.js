import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AnnounceBox(props) {
  const navigate = useNavigate();
  let [mouseOver, setMouseOver] = useState(false);
  let handleMouse = (e) => {
    e.preventDefault();
    setMouseOver(true);
    console.log(sessionStorage.getItem("property_id"));
  };
  let handleMouseOut = (e) => {
    e.preventDefault();
    setMouseOver(false);
  };
  let handleClick = (e) => {
    e.preventDefault();
    props.setPropertyId(props.property_id);
    navigate(`${props.property_id}`);
  };
  return (
    <Paper
      style={{
        scale: mouseOver ? "110%" : "",
        transition: "100ms",
        width: "25rem",
      }}
      elevation={10}
      display="grid"
      bgcolor={"#eeeee4"}
    >
      <Box
        onClick={handleClick}
        onMouseOver={handleMouse}
        onMouseOut={handleMouseOut}
        width="100%"
        style={{
          backgroundImage: `url(${
            props.item.images[0]
              ? props.item.images[0].data
              : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
          })`,
          height: "30vh",
          opacity: ".9",
          cursor: "pointer",
          justifySelf: "center",
          borderRadius: "5px 5px 0 0",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <Typography component="ul" style={{ padding: "1.5rem" }}>
        <Typography variant="h5">{props.item.suburb}</Typography>
        <Typography component="li">{props.item.address}</Typography>
        <Typography component="li">
          {props.item.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}{" "}
          (Venda)
        </Typography>
        <Typography component="li">
          {props.item.rent.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}{" "}
          (Aluguel)
        </Typography>
        <Typography component="li">
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              lineClamp: 2,
              WebkitBoxOrient: "vertical",
              margin: "0",
            }}
          >
            {props.item.description}
          </p>
        </Typography>
      </Typography>
    </Paper>
  );
}
