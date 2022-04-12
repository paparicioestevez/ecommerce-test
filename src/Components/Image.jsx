import React from "react";
import CardMedia from "@mui/material/CardMedia";

export const Image = props => {
  const { url } = props;

  return (
    <CardMedia
      sx={{ width: "auto", margin: "auto" }}
      component="img"
      image={url}
      alt={`Imagen del dispositivo`}
    />
  );
};
