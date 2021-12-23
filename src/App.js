import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ContactoContainer from './components/ContactoContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/productos" element={<ItemListContainer greeting="TODOS LOS PRODUCTOS"/>}></Route>
          <Route exact path="/productos/category/:categoryId" element={<ItemListContainer greeting="CATEGORIA..."/>}></Route>
          <Route exact path="/productos/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route exact path="/contacto" element={<ContactoContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
