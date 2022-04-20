import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Product from "../Services/Product";
import { Item } from "../Components/Item";
import { Search } from "../Components/Search";
import { useDispatch } from "react-redux";
import { toogle } from "../Store/mainSlice";
import { setItems, setExpire } from "../Store/itemsSlice";
import { useSelector } from "react-redux";

export const List = props => {
  const { expire, items } = useSelector(state => state.items);
  const { itemsBrowser, expireBrowser } = props;
  const [search, setSearch] = useState();
  const [productFilter, setProductFilter] = useState();
  const productService = new Product();
  const dispatch = useDispatch();

  const FetchProduct = async () => {
    dispatch(toogle());
    const productsFetched = await productService.all();
    dispatch(setItems(productsFetched));
    dispatch(setExpire(new Date().getTime() + 3600000));
    dispatch(toogle());
  };

  useEffect(
    () => {
      if (search)
        setProductFilter(
          items.filter(
            item =>
              item.model.toLowerCase().includes(search.toLowerCase()) ||
              item.brand.toLowerCase().includes(search.toLowerCase())
          )
        );
      else setProductFilter(items);
    },
    [search]
  );

  useEffect(
    () => {
      setProductFilter(items);
    },
    [items]
  );

  useEffect(() => {
    const now = new Date().getTime();
    if (itemsBrowser.length && !items && (now < expireBrowser || now < expire)) {
      dispatch(setItems(itemsBrowser));
    } else if (!items || now > expire) {
      FetchProduct();
    }
  }, []);

  return (
    <Grid container spacing={8} style={{ padding: 72 }}>
      <Search search={search} setSearch={setSearch} />
      {productFilter &&
        productFilter.map(product => {
          return (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Item product={product} />
            </Grid>
          );
        })}
    </Grid>
  );
};
