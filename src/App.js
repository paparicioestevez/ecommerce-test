import React, { Component } from 'react';
import './App.css';
import { List } from './Views/List';
import { Header } from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ProductDetails } from './Views/ProductDetails';
import { NotFound } from './Views/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<List />} />
            <Route exact path="/details/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
