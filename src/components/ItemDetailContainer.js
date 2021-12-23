import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { DB } from './ItemListContainer'

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({})
    useEffect(() => {
        /* Async mock (simulacion de proceso asincronico usando promise) */
        const getItem = new Promise((resolve, reject) => {
            setTimeout(()=>{
                const find = DB.find(item => item.id === Number(id));
                resolve(
                    find
                )
            }, 2000)
        })
        getItem.then((res)=>{
            setItem(res);
        })
    }, [id])

    return (
        <div className='container'>
            <h1 className='mt-5 pt-5 text-center text-uppercase'>Detalle</h1>
            <hr className="mb-5"/>
            <ItemDetail {...item}/>
        </div>
    )
}

export default ItemDetailContainer
