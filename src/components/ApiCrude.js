import axios from "axios";
const api = process.env.REACT_APP_API_KEY;

export async function Houses() {
  let response = await axios
    .get(`${api}properties`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
}

export async function GetCustomerByCpf(cpf) {
  let response = await axios
    .get(`${api}customers?cpf=${cpf}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
}

export async function PostImage(image, property) {
  const options = {
    "content-type": image.type,
    "content-length": `${image.size}`,
  };
  const response = await axios
    .post(`${api}images`, { data: image, property_id: property }, options)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return response;
}

export async function PostProperty(data) {
  const response = await axios
    .post(`${api}properties`, data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return response;
}
