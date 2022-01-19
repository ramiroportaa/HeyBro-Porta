import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Common from './Common'
import ItemDetail from './ItemDetail'
import { getDocument } from '../services/getData'

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        //Llamo a fn anonima para obtener el documento por id y setear el state del item que luego se renderea.
        (async function () {
            const snapshot = await getDocument(id)
            setItem({id: snapshot.id, ...snapshot.data()})
            setIsLoading(false);
        })();

        return (setIsLoading(true))
    }, [id])

    return (
        <div className='container mb-5'>
            <Common.Title text="Detalle"></Common.Title>
            <Common.Hr></Common.Hr>
            {isLoading ? <div className='d-flex justify-content-center'>
                            <Common.Loading/>
                         </div>
                        :
                        <ItemDetail {...item}/>
            }
        </div>
    )
}

export default ItemDetailContainer
