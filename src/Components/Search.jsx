import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export const Search = props => {
  const { setSearch } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-end"
    >
      <TextField
        id="outlined-basic"
        label="Buscador"
        variant="outlined"
        onChange={e => setSearch(e.target.value)}
      />
    </Grid>
  );
};
