import CardMedia from "@mui/material/CardMedia";
import React from "react";

export const NotFound = () => {
  return (
    <CardMedia
      sx={{ width: "auto", margin: "auto" }}
      component="img"
      image={
        "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-error-404-p%C3%A1gina-no-encontrada-error-con-efecto-de-falla-en-la-pantalla-ilustraci%C3%B3n-vectorial-para-s.jpg"
      }
      alt="404"
    />
  );
};
