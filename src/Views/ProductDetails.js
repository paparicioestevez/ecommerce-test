import { useEffect, useState } from "react";
import Product from "../Services/Product";
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
        FetchProductDetails();
    }, []);

    return (
        <div>
            {productDetail && JSON.stringify(productDetail)}
        </div>
    )
}