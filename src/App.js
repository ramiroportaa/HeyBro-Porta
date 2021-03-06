import React from 'react'
import {CartProvider} from './context/cartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ContactoContainer from './components/ContactoContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/productos" element={<ItemListContainer greeting="TODOS LOS PRODUCTOS"/>}></Route>
          <Route exact path="/productos/category/:categoryId" element={<ItemListContainer greeting="CATEGORIA..."/>}></Route>
          <Route exact path="/productos/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route exact path="/contacto" element={<ContactoContainer/>}></Route>
          <Route exact path="/cart" element={<Cart/>}></Route>
          <Route exact path="/checkout" element={<Checkout/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
