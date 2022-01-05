import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Common from './Common';

/* Creamos DB para simular la lista de productos que deberia otorgar el backend */
export const DB = [{id: 1, title: "Bermuda negra FRANKLIN", description: "Bermuda clasica de gabardina para todos tus dias de verano", price: 3000, pictureUrl: "/img//1.jpg", stock: 4, category:"bermudas"},
            {id: 2, title: "Jean azul intenso INDO", description: "Jean semi-chupin azul para todo uso", price: 4000, pictureUrl: "/img/2.jpg", stock: 0, category:"pantalones"},
            {id: 3, title: "Jean celeste con roturas KAFKA", description: "Tremendo Jean rigido y recto con roturas para el dia o la noche", price: 4500, pictureUrl: "/img/3.jpg", stock:1, category:"pantalones"},
            {id: 4, title: "Remera batik MIGUEL", description: "Tremenda remera que va con vos", price: 2000, pictureUrl: "/img/4.jpg", stock:2, category:"remeras"},
            {id: 5, title: "Jogger beige CAMUS", description: "Comodidad para toda ocasion", price: 4000, pictureUrl: "/img/5.jpg", stock:3, category:"pantalones"},
            {id: 6, title: "Jean azul PEPE", description: "Jean elastizado chupin con leves roturas, color azul", price: 3500, pictureUrl: "/img/6.jpg", stock:0, category:"pantalones"},
            {id: 7, title: "Remera lisa blanca VILO", description: "Tremenda remera que va con vos", price: 2000, pictureUrl: "/img/7.jpg", stock:5, category:"remeras"},
            {id: 8, title: "Remera lisa negra VILO", description: "Tremenda remera que va con vos", price: 2000, pictureUrl: "/img/8.jpg", stock:0, category:"remeras"}
        ];

export default function ItemListContainer (props) {
    const {categoryId} = useParams();
    let isCategory = categoryId===undefined ? false : true;
    const Greeting = isCategory ? categoryId : props.greeting;
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const categoryList = ["remeras", "pantalones", "bermudas"]
    
    useEffect(() => {
        /* Async mock (simulacion de proceso asincronico usando promise) */
        const API = new Promise((resolve, reject) => {
            setTimeout(()=>{
                const result = isCategory ? DB.filter(item => item.category === categoryId) : DB;
                resolve(
                    result
                )
            }, 2000)
        })
        API.then((res)=>{
            setProductos(res)
            setIsLoading(false)
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
                        {isLoading ? <Common.Loading/> :
                        <ItemList items={productos}></ItemList>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}