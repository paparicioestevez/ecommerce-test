import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Services/Product';
import { MainItem } from '../Components/MainItem';

export const Main = () => {
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
    <Grid container spacing={8} style={{padding: 24}}>
      {products && products.map(product => {
        return <Grid item  xs={12} sm={6} md={3} key={product.id}>
          <MainItem product={product} />
        </Grid>
      })}
    </Grid>
  )
}



