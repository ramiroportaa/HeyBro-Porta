import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className="product text-center">
            <div className="mb-3 position-relative">
                <div className="badge text-black badge-primary">{(props.stock>0) ? "DISPONIBLE" : "AGOTADO"}
                </div>
                <Link to="/productos/item/2"  className="d-block">
                    <img className="img-fluid w-100" src={props.pictureUrl} alt={props.title}/>
                </Link>
                <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                        <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href=" ">Agregar al carrito</a></li>
                        <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href=" " data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                </div>
            </div>
            <h6 className="reset-anchor"> <a className='a'  href=" " data-bs-toggle="modal">{props.title}</a></h6>
            <p className="small text-muted">${props.price}.-</p>
        </div>
    )
}

export default Item
