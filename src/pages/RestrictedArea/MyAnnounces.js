import React from "react";
import { Box, Grid } from "@mui/material";
import AnnounceBox from "../../components/rest-area-components/AnnouceBox";

export default function MyAnnounces(props) {
  const costumer = props.costumer;
  return (
    <Grid>
      {!costumer ? (
        <Grid>Não há anúncios</Grid>
      ) : (
        <Grid>
          <Box display="inline-flex" flexWrap={'wrap'} gap={'3rem'} >
            {costumer.properties.map((item, key) => (
              <AnnounceBox key={key} item={item} setPropertyId={props.setPropertyId} property_id={item.id} />
            ))}
          </Box>
        </Grid>
      )}
    </Grid>
  );
}
