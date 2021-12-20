import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    useEffect(() => {
        /* Async mock (simulacion de proceso asincronico usando promise) */
        const getItem = new Promise((resolve, reject) => {
            setTimeout(()=>{
            resolve(
                {id: 2, title: "Remera2", description: "Tremenda remera que va con vos", price: 3000, pictureUrl: "logo192.png", stock: 4}
            )
            }, 2000)
        })
        getItem.then((res)=>{
            setItem(res);
        })
    }, [])
    console.log(item);

    return (
        <div className='container'>
            <h1 className='mt-5 pt-5 text-center'>Detalle del producto</h1>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
