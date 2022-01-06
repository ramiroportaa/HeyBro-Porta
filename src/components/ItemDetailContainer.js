import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Common from './Common'
import ItemDetail from './ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", id);
        getDoc(itemRef).then((snapshot)=>{
            if (snapshot.exists()){
                setItem({id: snapshot.id, ...snapshot.data()})
            }
        }).catch((error)=>{
            console.log("ERROR buscando el item", error);
        }).finally(()=>{
            setIsLoading(false);
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
