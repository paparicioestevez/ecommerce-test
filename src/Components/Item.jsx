import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { CardActionArea, Chip } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

export const Item = props => {
  const { product } = props;
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`/details/${product.id}`)}>
        <CardMedia
          sx={{ width: "auto", height: 100, margin: "auto" }}
          component="img"
          image={product.imgUrl}
          alt={`Imagen del dispositivo ${product.id}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.model}
          </Typography>
          <Chip
            variant="outlined"
            color="info"
            size="small"
            label={`${product.price || "consultar"}`}
            icon={<EuroIcon />}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
