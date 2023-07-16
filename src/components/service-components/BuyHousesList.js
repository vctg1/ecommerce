import { Box, Grid } from "@mui/material";
import React from "react";
import HouseBox from "./HouseBox";

export default function BuyHousesList(props) {
  return (
    <Box
      display="inline-flex"
      flexWrap={"wrap"}
      gap={"3rem"}
      justifyContent={'space-between'}
      margin={`${props.matches ? "5rem 10rem" : "1rem"}`}
    >
      {props.properties?.map((item, key) => (
        <HouseBox key={key} item={item} matches={props.matches} />
      ))}
    </Box>
  );
}
