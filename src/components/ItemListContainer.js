import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Common from './Common';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';

export default function ItemListContainer (props) {
    const {categoryId} = useParams();
    let isCategory = categoryId===undefined ? false : true;
    const Greeting = isCategory ? categoryId : props.greeting;
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const categoryList = ["remeras", "pantalones", "bermudas", "camisas"]
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");
        const itemForCategory = isCategory && query(itemCollection, where("categoryId", "==", categoryId))
        getDocs(isCategory ? itemForCategory : itemCollection).then((querySnapshot)=>{
            if (querySnapshot.size === 0){
                console.log("NO HAY RESULTADOS");
            }
            setProductos(querySnapshot.docs.map(doc =>({id: doc.id, ...doc.data()})));
        }).catch((error)=>{
            console.log("ERROR buscando items", error);
        }).finally(()=>{
            setIsLoading(false);
        })

        return (setIsLoading(true))
    }, [categoryId, isCategory])

 
    return (
        <div className="container mb-5">
            <Common.Title text={Greeting}></Common.Title>
            <Common.Hr></Common.Hr>
            <div className='row'>
                <div className="col-lg-3 order-2 order-lg-1">
                    <h5 className="text-uppercase mb-4">Categorias</h5>
                    {categoryList.map(cat =>(
                        <Link to={`/productos/category/${cat}`} className="reset-anchor a py-2 px-4 bg-dark text-white mb-3 d-block background-hover"><strong className="small text-uppercase font-weight-bold">{cat}</strong></Link>
                    ))}
                    <br/>
                    <Link to="/productos" className="reset-anchor text-uppercase a">Ver todos los productos</Link>
                </div>
                <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                    <div className="row mb-3 align-items-center justify-content-center">
                        {isLoading ? 
                                    <Common.Loading/>
                                    :
                                    (productos.length ? <ItemList items={productos}></ItemList> : <h4 className='text-center'>NO SE ENCONTRARON RESULTADOS</h4>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}