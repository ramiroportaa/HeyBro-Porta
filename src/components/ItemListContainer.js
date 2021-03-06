import React, {useState, useEffect} from 'react'
import { Link, useParams, NavLink, useSearchParams } from 'react-router-dom';
import ItemList from './ItemList';
import Common from './Common';

//Importo las fn para obtener los documentos de firestore.
import { getCollection, getCollectionByCategory } from '../services/getData';

export default function ItemListContainer (props) {
    const {categoryId} = useParams();
    let isCategory = categoryId===undefined ? false : true;
    const Greeting = isCategory ? categoryId : props.greeting;
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const categoryList = ["remeras", "pantalones", "bermudas", "camisas"]

    //Para paginacion numerica
    const [searchParams, setSearchParams] = useSearchParams();
    const [itemsList, setItemsList] = useState([])
    const [pages, setPages] = useState([])
    const limit = 8

    useEffect(() => {
        //Llamo a funcion anonima para obtener todos los documentos de la coleccion de firestore y setear la paginacion.
        (async function () {
            const snapshot = isCategory ? await getCollectionByCategory(categoryId) : await getCollection()
            let pagesArray = []
            for(let i=1; i <= Math.ceil(snapshot.size/limit); i++){
                pagesArray.push(i)
            }
            setPages(pagesArray)
            setItemsList(snapshot.docs)
        })();
        
        //Llamo a fn anonima para obtener los documentos con el limite establecido y setear el state de productos que luego se renderea.
        (async function () {
            const page = searchParams.get("page") ?? 1;
            const item = itemsList[Number(page)*limit - limit]
            item && console.log(item.data());
            const snapshot = isCategory ? await getCollectionByCategory(categoryId, limit, page !== 1 ? item : "") : await getCollection(limit, page !== 1 ? item : "")
            setProductos(snapshot.docs.map(doc =>({id: doc.id, ...doc.data()})));
            setIsLoading(false);
        })();

        return (setIsLoading(true))
    }, [categoryId, isCategory, searchParams])

    //Manejador para paginacion de resultados.
    const handleClick = async (e)=>{
        const page = Number(e.target.innerText)
        setSearchParams({page: page})
    }

    return (
        <div className="container mb-5">
            <Common.Title text={Greeting}></Common.Title>
            <Common.Hr></Common.Hr>
            <div className='row'>
                <div className="col-lg-3 order-2 order-lg-1">
                    <h5 className="text-uppercase mb-4">Categorias</h5>
                    {categoryList.map(cat =>(
                        <Link to={`/productos/category/${cat}?page=1`} className="reset-anchor a py-2 px-4 bg-dark text-white mb-3 d-block background-hover"><strong className="small text-uppercase font-weight-bold">{cat}</strong></Link>
                    ))}
                    <br/>
                    <Link to="/productos?page=1" className="reset-anchor text-uppercase a">Ver todos los productos</Link>
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
            <div className='row'>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center justify-content-lg-end">
                        { pages.map(p=>(
                            <li key={p.toString()} onClick={handleClick} className="page-item"><NavLink to="" className="page-link text-dark background-hover">{p}</NavLink></li>
                        )) }
                        </ul>
                    </nav>
            </div>
        </div>
    )
}