import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Services/Product';
import { Item } from '../Components/Item';
import { Search } from '../Components/Search';
import Skeleton from '@mui/material/Skeleton';
import { useDispatch } from 'react-redux'
import { toogle } from '../Store/headerSlice';
import { setItems } from '../Store/itemsSlice';

import { useSelector } from 'react-redux';

export const List = () => {
  const { expire, items } = useSelector((state) => state.items);
  const [search, setSearch] = useState();
  const [productFilter, setProductFilter] = useState();
  const productService = new Product();
  const dispatch = useDispatch()

  const FetchProduct = async () => {
    dispatch(toogle());
    const productsFetched = await productService.all();
    dispatch(setItems(productsFetched));
    dispatch(toogle());
  }

  useEffect(() => {
    if (search) setProductFilter(items.filter(item => item.model.toLowerCase().includes(search.toLowerCase()) || item.brand.toLowerCase().includes(search.toLowerCase())));
    else setProductFilter(items);
  }, [search]);

  useEffect(() => {
    setProductFilter(items);
  }, [items]);


  useEffect(() => {
    const now = new Date().getTime();
    if (!expire || now > expire) FetchProduct();
  }, []);

  return (
    <Grid container spacing={8} style={{ padding: 72 }}>
      <Search search={search} setSearch={setSearch} />
      {productFilter ? productFilter.map(product => {
        return <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Item product={product} />
        </Grid>
      }) : <Skeleton variant="rectangular" width={210} height={118} />}
    </Grid>
  )
}