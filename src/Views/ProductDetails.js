import { useEffect, useState } from "react";
import Product from "../Services/Product";
import { Image } from "../Components/Image";
import { Description } from "../Components/Description";
import Grid from '@mui/material/Grid';
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
    const { id } = useParams();

    const [productDetail, setProductDetail] = useState();

    const productService = new Product();

    const FetchProductDetails = async () => {
        const productsDetailsFetched = await productService.details(id);
        setProductDetail(productsDetailsFetched);
    }

    useEffect(() => {
        !productDetail && FetchProductDetails();
    }, []);

    return (
        <Grid container sx={{padding: 12 }}>
            {productDetail && <>
                <Grid item xs={12} sm={6}>
                    <Image url={productDetail.imgUrl} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Description productDetail={productDetail}/>
                </Grid>
            </>}
        </Grid>
    )
}