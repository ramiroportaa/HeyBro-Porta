import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola desde ItemListContainer" />
    </>
  );
}

export default App;
