import React, { Component } from 'react';
import './App.css';
import { List } from './Views/List';
import { Header } from './Components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import { ProductDetails } from './Views/ProductDetails';
import { NotFound } from './Views/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/details/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>,
      </div>
    );
  }
}

export default App;
