import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import moldura from "../../images/moldura.png";
import { Houses } from "../ApiCrude";

export default function HomeCarousel(props) {
  let [properties, setProperties] = useState();
  async function SetProperties() {
    const response = await Houses();
    setProperties(response.filter((prop) => prop.images[0]));
  }
  useEffect(() => {
    SetProperties();
  }, []);
  return (
    <Carousel
      navButtonsAlwaysVisible={props.matches}
      animation="fade"
      duration="500"
    >
      {properties?.slice(0, 5).map((item, i, key) => (
        <Box
          key={key}
          style={{
            display:'grid',
            opacity: ".9",
            backgroundImage: `url('${item.images[0]?.data}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "5px",
          }}
        >
          <img src={moldura} style={{maxHeight:'34rem'}} width='100%'  alt='' />
        </Box>
      ))}
    </Carousel>
  );
}
