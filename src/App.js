import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ContactoContainer from './components/ContactoContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/productos" element={<ItemListContainer greeting="PRODUCTOS"/>}></Route>
          <Route exact path="/productos/category/:id" element={<ItemListContainer greeting="CATEGORIA..."/>}></Route>
          <Route exact path="/productos/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route exact path="/contacto" element={<ContactoContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
