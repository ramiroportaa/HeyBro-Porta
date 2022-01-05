import React from "react";

export const CartContext = React.createContext([])

export const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState({items: [], total: 0, size: 0, discountRate: 0})

    const sumaTotal = (array)=>{
        let suma = 0
        array.forEach((prod)=>{suma += prod.price * prod.quantity})
        return suma
    }

    const calcularSize = (array)=>{
        let cartSize = 0
        array.forEach(prod => {cartSize += prod.quantity})
        return cartSize
    }

    const aplicarDescuento = (porcentaje) =>{
        setCart(
            {
                items: cart.items,
                total: cart.total,
                size: cart.size,
                discountRate: porcentaje
            }
        )
    }

    const isInCart = (itemId)=>(
        cart.items.some(prod => prod.id === itemId)
    )

    const getItemQuantity = (itemId) =>{
        if (isInCart(itemId)){
            const itemCartQuantity = cart.items.filter(prod => prod.id === itemId)[0].quantity
            return itemCartQuantity  
        }else{
            return 0
        }        
    }
    
    const addItem = (item, quantity)=>{
        //Si el producto ya esta agregado al carrito... Solo aumentamos la cantidad.
        if (isInCart(item.id)){
            let nuevoCart = [...cart.items]
            nuevoCart.map(prod =>(
                (prod.id === item.id) && (prod.quantity += quantity)
            ))
            setCart(
                {
                    items: nuevoCart,
                    total: sumaTotal(nuevoCart),
                    size: calcularSize(nuevoCart),
                    discountRate: cart.discountRate
                }
            )
        }else{ //Si no esta, simplemente lo agregamos.
            let nuevoCart = [...cart.items, {...item, quantity: quantity}]
            setCart(
                {
                    items: nuevoCart,
                    total: sumaTotal(nuevoCart),
                    size: calcularSize(nuevoCart),
                    discountRate: cart.discountRate
                }
            )
        }
    }

    const removeItem = (itemId)=>{
        let nuevoCart = cart.items.filter(prod => prod.id !== itemId)
        setCart(
            {
                items: nuevoCart,
                total: sumaTotal(nuevoCart),
                size: calcularSize(nuevoCart),
                discountRate: cart.discountRate
            }
        )
    }

    const clear = ()=>{
        setCart(
            {
                items: [],
                total: 0,
                size: 0,
                discountRate: 0
            }
        )
    }

    return (
        <CartContext.Provider value={{cart, isInCart, getItemQuantity, addItem, removeItem, clear, aplicarDescuento}}>
            {children}
        </CartContext.Provider>
    )
}