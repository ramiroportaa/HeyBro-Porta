import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';

export default function ItemListContainer (props) {
    const Greeting = props.greeting;
    const [productos, setProductos] = useState([])
    useEffect(() => {
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
    }, [])
    
    return (
        <div className="container">
            <h2 className="mt-5 pt-5 mb-5 text-center"> {Greeting} </h2>
            <ItemList items={productos}></ItemList>
        </div>
    )
}