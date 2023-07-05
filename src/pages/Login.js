import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { GetCustomerByCpf } from "../components/ApiCrude";

export default function Login(props) {
  const [data, setData] = useState({});
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await GetCustomerByCpf(data.cpf);
    if(response && response[0]?.password === data.senha){
        alert('Logado com sucesso');
        sessionStorage.setItem('login', data.cpf);
        window.location.href = ('/area-restrita')
    }
    else(alert('informaçoes incorretas'))
  }
  return (
    <Grid>
      <form onSubmit={handleSubmit}
        style={{
          display: "grid",
          justifyContent: "center",
          minHeight: "30rem",
          alignItems: "center",
        }}
      >
        <Paper style={{ display: "grid", gap: "1rem", padding: "1rem" }}>
          <Typography textAlign={"center"} variant="h4">
            Login
          </Typography>
          <InputMask
            onChange={(e) => {
              setData((data) => ({ ...data, cpf: e.target.value }));
            }}
            mask="999.999.999-99"
            maskChar={null}
            id="cpfAluno"
          >
            {() => <TextField label="CPF" />}
          </InputMask>
          <TextField
          onChange={(e) => {
            setData((data) => ({ ...data, senha: e.target.value }));
          }}
          label="Senha" type="password" />
          <Button type="submit" variant="contained">Entrar</Button>
        </Paper>
      </form>
    </Grid>
  );
}
