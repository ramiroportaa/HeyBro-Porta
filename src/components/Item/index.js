import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext';
import { ToastContainer, toast } from 'react-toastify';

const Item = ({id, title, price, pictureUrl, stock}) => {

    const useCart = React.useContext(CartContext);

    const itemCartQuantity = useCart.getItemQuantity(id)

    const addOneItem = ()=>{
        if ((stock >= 1) && (stock > itemCartQuantity)) {
            useCart.addItem({id: id, title: title, price: price, pictureUrl: pictureUrl},1)
            useCart.isInCart(id) ? toast.success("SE AGREGO OTRA UNIDAD DE " + title) : toast.success("SE AGREGO 1 UNIDAD DE " + title)
            
        }else{
            toast.warn ("NO HAY STOCK SUFICIENTE DE " + title)
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
                        <li className="list-inline-item m-0 p-0"><button className="btn btn-sm btn-dark px-3 background-hover" onClick={addOneItem}>{useCart.isInCart(id) ? "Agregar OTRA unidad" : "Agregar al carrito"}</button></li>
                        <li className="list-inline-item me-0"><Link to={`/productos/item/${id}`} className="btn btn-sm btn-outline-dark background-hover"><i className="fas fa-expand"></i></Link></li>               
                    </ul>
                </div>
            </div>
            <h6 className="reset-anchor"> <Link to={`/productos/item/${id}`} className='a'>{title}</Link></h6>
            <p className="small text-muted">${price}.-</p>
        </div>
        <ToastContainer />
        </>
    )
}

export default Item
