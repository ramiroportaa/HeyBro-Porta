import React from 'react'
import { CartContext } from '../context/cartContext';

export default function CartWidget () {

    const useCart = React.useContext(CartContext);
    let cartSize = useCart.cart.items.length
    return (
         <i id="nav-carrito" className="fas fa-shopping-cart"><span className="ms-1">Carrito ({cartSize})</span></i>   
    )
}
