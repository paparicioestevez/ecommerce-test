import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export const Item = (props) => {
    const { product } = props;
    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={product.brand}
                subheader={product.model}
            />
            <CardMedia
                sx={{ width: 'auto', height: 200, margin: 'auto' }}
                component="img"
                image={product.imgUrl}
                alt={`Imagen del dispositivo ${product.id}`}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {`${product.price || 'consultar'} €`}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="show product details" onClick={() => navigate(`/details/${product.id}`)}>
                    <VisibilityOutlinedIcon />
                </IconButton>
            </CardActions>
        </Card >
    )
}

