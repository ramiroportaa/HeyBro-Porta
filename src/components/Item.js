import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from '../context/cartContext';

const Item = ({id, title, price, pictureUrl, stock}) => {
    
    const useCart = React.useContext(CartContext);

    const addOneItem = ()=>{
        if (stock >= 1) {
            useCart.addItem({id: id, title: title, price: price},1)
        }else{
            alert ("NO HAY STOCK")
        }
    }

    return (
        <>
        <div className="product text-center">
            <div className="mb-3 position-relative">
                <div className="badge text-black badge-primary">{(stock>0) ? "DISPONIBLE" : "AGOTADO"}
                </div>
                <Link to={`/productos/item/${id}`} className="d-block">
                    <img className="img-fluid w-100" src={pictureUrl} alt={title}/>
                </Link>
                <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                        <li className="list-inline-item m-0 p-0"><button className="btn btn-sm btn-dark px-3 background-hover" onClick={addOneItem}>Agregar al carrito</button></li>
                        {/* PARA MODAL A DESARROLLAR
                        <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href={`productView-${id}`}><i className="fas fa-expand"></i></a></li>
                        */}
                    </ul>
                </div>
            </div>
            <h6 className="reset-anchor"> <Link to={`/productos/item/${id}`} className='a'>{title}</Link></h6>
            <p className="small text-muted">${price}.-</p>
        </div>
        </>
    )
}

export default Item
