import React, { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import { List } from "./Views/List";
import { Header } from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductDetails } from "./Views/ProductDetails";
import { NotFound } from "./Views/NotFound";
import { useSelector } from "react-redux";

export const App = () => {
  const { items, expire } = useSelector(state => state.items);
  const [itemsBrowser, setItemsBrowser] = useState();
  const [expireBrowser, setExpireBrowser] = useState();
  const [isAppLoad, setIsAppLoad] = useState(false);

  useEffect(
    () => {
      window.addEventListener("beforeunload", () => {
        localStorage.setItem("items_commerce", JSON.stringify(items));
        expire && localStorage.setItem("expire", expire);
      });
    },
    [items, expire]
  );

  useLayoutEffect(() => {
    window.addEventListener("load", () => {
      const itemsBrowser = localStorage.getItem("items_commerce");
      const expireBrowser = localStorage.getItem("expire");
      setItemsBrowser(JSON.parse(itemsBrowser));
      setIsAppLoad(true);
      setExpireBrowser(+expireBrowser || null);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>{isAppLoad && <List itemsBrowser={itemsBrowser} expireBrowser={expireBrowser}/>}</>
            }
          />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
};
