import { Button, Paper } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

export default function MenuSelect(props) {
  const menuOptions = props?.menuOptions;
  return (
    <Paper
      style={{
        display: "grid",
        gap: ".5rem",
        width: "max-content",
        padding: "1rem",
        backgroundColor: "whitesmoke",
      }}
    >
      {menuOptions?.map((item, key) => (
        <Link key={key} to={`/minha-atividade/${item.page}`}>
          <Button
            variant={props.selected === item.page ? "contained" : "outlined"}
            sx={{
              minWidth: "20rem",
              maxWidth: "max-content",
              justifyContent: "space-between",
            }}
            onClick={() => props.setSelected(item.page)}
          >
            <p style={{ margin: 0 }}>{item.title}</p>
            <KeyboardArrowRightIcon />
          </Button>
        </Link>
      ))}
    </Paper>
  );
}
