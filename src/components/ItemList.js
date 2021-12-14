import React, {useState} from 'react';
import Item from './Item';

const ItemList = () => {
    const [productos, setProductos] = useState([])
    /* Async mock (simulacion de proceso asincronico usando promise) */
    const API = new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve(
            [{id: 1, title: "Remera", description: "Tremenda remera que va con vos", price: 2000, pictureUrl: "logo.png", stock: 4},
            {id: 2, title: "Remera2", description: "Tremenda remera que va con vos", price: 3000, pictureUrl: "logo192.png", stock: 0},
            {id: 3, title: "Remera3", description: "Tremenda remera que va con vos", price: 4000, pictureUrl: "logo512.png", stock:1},
            {id: 4, title: "Remera4", description: "Tremenda remera que va con vos", price: 1000, pictureUrl: "logo.png", stock:2}
            ]
        )
        }, 2000)
    })
    API.then((res)=>{
        setProductos(res)
    })

    return (
        <div className="row">
            {
            /* Hago iteracion de los productos usando map y creando un componente Item por cada producto */
            productos.map(prod => (
                <div key={prod.id} className="col-xl-3 col-lg-3 col-sm-6">
                    <Item title={prod.title} price={prod.price} pictureUrl={prod.pictureUrl} stock={prod.stock}></Item>
                </div>
            ))
            }        
        </div>
    )
}

export default ItemList
