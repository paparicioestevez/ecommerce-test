import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

export const Item = (props) => {
    const { product } = props;
    const navigate = useNavigate();

    return (
        <Grid  onClick={() => navigate(`/details/${product.id}`)}>

            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
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
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card >
        </Grid>
    )
}

