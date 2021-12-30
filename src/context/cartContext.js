import React from "react";
import Item from "../components/Item";

export const CartContext = React.createContext([])

export const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState({items: [], total: 0})

    const sumaTotal = (array)=>{
        let suma = 0
        array.forEach((prod)=>{suma += prod.price * prod.quantity})
        return suma
    }

    const isInCart = (itemId)=>(
        cart.items.some(prod => prod.id === itemId)
    )
    
    const addItem = (item, quantity)=>{
        //Si el producto ya esta agregado al carrito... Solo aumentamos la cantidad.
        if (isInCart(item.id)){
            let nuevoCart = [...cart.items]
            nuevoCart.map(prod =>(
                (prod.id === item.id) ? prod.quantity += quantity : null
            ))
            setCart(
                {
                    items: nuevoCart,
                    total: sumaTotal(nuevoCart)
                }
            )
        }else{ //Si no esta, simplemente lo agregamos.
            let nuevoCart = [...cart.items, {...item, quantity: quantity}]
            setCart(
                {
                    items: nuevoCart,
                    total: sumaTotal(nuevoCart)
                }
            )
        }

        console.log("Se agrego el item " + item.id + " " + item.title + " cantidad: " + quantity);
    }

    const removeItem = (itemId)=>{
        let nuevoCart = cart.items.filter(prod => prod.id !== itemId)
        setCart(
            {
                items: nuevoCart,
                total: sumaTotal(nuevoCart)
            }
        )
    }

    const clear = ()=>{
        setCart(
            {
                items: [],
                total: 0
            }
        )
    }

    React.useEffect(()=>{
        console.log(cart);
    },[cart])

    return (
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}