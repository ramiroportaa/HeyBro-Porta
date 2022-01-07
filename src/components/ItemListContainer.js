import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
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
    const [itemsList, setItemsList] = useState([])
    const [pages, setPages] = useState([])
    const limit = 3
    
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
        const snapshot = isCategory ? await getCollectionByCategory(categoryId, limit) : await getCollection(limit)
        setProductos(snapshot.docs.map(doc =>({id: doc.id, ...doc.data()})));
        setIsLoading(false);
        })();

        return (setIsLoading(true))
    }, [categoryId, isCategory])

    //Manejador para paginacion de resultados.
    const handleClick = async (e)=>{
        const page = Number(e.target.innerText)
        const item = itemsList[page*limit - limit]
        //Vulevo a llamar fn para obtener los documentos pero pasandole el item para la query "startAt"
        const snapshot = isCategory ? await getCollectionByCategory(categoryId, limit, item) : await getCollection(limit, item)
        setProductos(snapshot.docs.map(doc =>({id: doc.id, ...doc.data()})));
        setIsLoading(false);
    }

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
            <div className='row'>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center justify-content-lg-end">
                        { pages.map(p=>(
                            <li key={p} onClick={handleClick} class="page-item"><p class="page-link">{p}</p></li>
                        )) }
                        </ul>
                    </nav>
            </div>
        </div>
    )
}