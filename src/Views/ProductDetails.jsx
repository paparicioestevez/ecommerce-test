import React, { useEffect, useState } from "react";
import Product from "../Services/Product";
import { Image } from "../Components/Image";
import { Description } from "../Components/Description";
import Grid from '@mui/material/Grid';
import { useParams } from "react-router-dom";
import { Actions } from "../Components/Actions";
import { toogle, updateBasket } from '../Store/mainSlice';
import { useDispatch } from 'react-redux'
import { setItems } from '../Store/itemsSlice';
import { useSelector } from 'react-redux';

export const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { items } = useSelector((state) => state.items);

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

    const handleAddToShoppingBasket = async (color, storage) => {
        dispatch(toogle());
        const response = await productService.add(id, color.code, storage.code);
        dispatch(updateBasket(response.count));
        localStorage.setItem('cart', JSON.stringify(response.count));
        dispatch(toogle());
    }

    return (
        <Grid container sx={{ padding: 4 }}>
            {productDetail && <>
                <Grid item xs={12} sm={6} sx={{ padding: 8 }}>
                    <Image url={productDetail.imgUrl} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid>
                        <Description productDetail={productDetail} />
                    </Grid>
                    <Grid sx={{ marginTop: 8 }}>
                        <Actions productDetail={productDetail} onAddToShoppingBasket={handleAddToShoppingBasket} />
                    </Grid>
                </Grid>
            </>}
        </Grid>
    )
}