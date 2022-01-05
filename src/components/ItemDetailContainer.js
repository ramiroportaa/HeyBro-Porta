import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Common from './Common'
import ItemDetail from './ItemDetail'
import { DB } from './ItemListContainer'

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true);
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
            setIsLoading(false)
        })
        return (setIsLoading(true))
    }, [id])

    return (
        <div className='container mb-5'>
            <Common.Title text="Detalle"></Common.Title>
            <Common.Hr></Common.Hr>
            {isLoading ? <Common.Loading/> :
                        <ItemDetail {...item}/>
            }
        </div>
    )
}

export default ItemDetailContainer
