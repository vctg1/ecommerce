import { React, useState, useEffect } from "react";
import axios from "axios";
const api = process.env.REACT_APP_API_KEY;

export async function Houses() {
  let response = await axios.get(`${api}properties`).then((res) => {
    return res.data.data
  }).catch(error=>{return error})
  return response;
}

export async function GetCustomerByCpf(cpf) {
  let response = await axios
    .get(`${api}customers?cpf=${cpf}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => console.log(error));
  return response;
}
