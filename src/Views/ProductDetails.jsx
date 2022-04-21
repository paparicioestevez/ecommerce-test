import React, { useEffect, useState } from "react";
import Product from "../Services/Product";
import { Description } from "../Components/Description";
import Grid from '@mui/material/Grid';
import { useParams } from "react-router-dom";
import { Actions } from "../Components/Actions";
import { toogle, updateBasket } from '../Store/mainSlice';
import { useDispatch } from 'react-redux'
import { setItems } from '../Store/itemsSlice';
import { useSelector } from 'react-redux';
import { CardMedia, Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
export const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { items } = useSelector((state) => state.items);
    const [open, setOpen] = useState(false);


    const [productDetail, setProductDetail] = useState();

    const productService = new Product();

    const FetchProductDetails = async () => {
        dispatch(toogle());
        const productsDetailsFetched = await productService.details(id);

        const itemsAux = items.map(item => {
            if (item.id === productsDetailsFetched.id) {
                return {
                    ...item,
                    details: {
                        ...productsDetailsFetched,
                        expire: new Date().getTime() + 3600000
                    }
                }
            }
            else return item;
        });
        dispatch(setItems(itemsAux));
        localStorage.setItem('items_commerce', JSON.stringify(itemsAux));
        setProductDetail(productsDetailsFetched);
        dispatch(toogle());
    }

    useEffect(() => {
        if (items.length) {
            const product = items.find(item => item.id === id);
            const now = new Date().getTime();
            if (!product.details || now > product.details.expire) {
                FetchProductDetails();
            } else {
                setProductDetail(product.details);
            }
        }
    }, [items]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleAddToShoppingBasket = async (color, storage) => {
        dispatch(toogle());
        const response = await productService.add(id, color.code, storage.code);
        dispatch(updateBasket(response.count));
        localStorage.setItem('cart', JSON.stringify(response.count));
        setOpen(true);
        dispatch(toogle());
    }

    return (
        <Grid container spacing={2} sx={{ padding: 4 }}>
            {productDetail && <>
                <Grid item xs={12} sm={6} sx={{ border: '1px solid #ccc', backgroundColor: '#ddffff',  borderRadius:10}}>
                <CardMedia
          sx={{ width: "auto", height: '90%', margin: "auto" }}
          component="img"
          image={productDetail.imgUrl}
          alt={`Imagen del dispositivo ${productDetail.id}`}
        />           
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid>
                        <Description productDetail={productDetail} />
                    </Grid>
                    <Grid sx={{ marginTop: 4 }}>
                        <Actions productDetail={productDetail} onAddToShoppingBasket={handleAddToShoppingBasket} />
                    </Grid>
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Producto añadido a la cesta
        </Alert>
      </Snackbar>

            </>}
        </Grid>
    )
}