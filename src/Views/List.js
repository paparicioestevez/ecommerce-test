import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Services/Product';
import { Item } from '../Components/Item';
import Skeleton from '@mui/material/Skeleton';

export const List = () => {
  const productService = new Product();
  const [products, setProducts] = useState();

  const FetchProduct = async () => {
    const productsFetched = await productService.all();
    setProducts(productsFetched);
  }

  useEffect(() => {
    FetchProduct();
  }, []);


  return (
    <Grid container spacing={8} style={{ padding: 24 }}>
      {products ? products.map(product => {
        return <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Item product={product} />
        </Grid>
      }) : <Skeleton variant="rectangular" width={210} height={118} />}
    </Grid>
  )
}