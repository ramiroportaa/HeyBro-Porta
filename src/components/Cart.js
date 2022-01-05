import React from 'react'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'
import Common from './Common'

const Cart = () => {
    const useCart = React.useContext(CartContext);
    const items = useCart.cart.items

    const handleSubmit = (e)=>{
        e.preventDefault()
        const value = e.target[0]._valueTracker.getValue()
        if (value === "coderhouse") {
            const porcentaje = 10;
            useCart.aplicarDescuento(porcentaje)
        }else {
            alert("El cupon ingresado no es valido");
        }
    }

    const CartView = ()=>(
    <>
        <div className="col-lg-8 mb-4 mb-lg-0">
        <div className="table-responsive mb-4">
            <table className="table">
            <thead className="bg-light">
                <tr>
                <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Producto</strong></th>
                <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Precio</strong></th>
                <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Cantidad</strong></th>
                <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Total</strong></th>
                <th className="border-0" scope="col"> </th>
                </tr>
            </thead>
            <tbody>
                {items.map(prod => (
                    <tr key={prod.id}>
                        <th className="pl-0 border-0" scope="row">
                        <div className="media align-items-center"><Link to={`/productos/item/${prod.id}`} className="reset-anchor d-block"><img src={prod.pictureUrl} alt={prod.title} width="70"/></Link>
                        <div className="media-body ms-3"><strong className="h6"><Link to={`/productos/item/${prod.id}`} className="reset-anchor">{prod.title}</Link></strong></div>
                        </div>
                        </th>
                        <td className="align-middle border-0">
                            <p className="mb-0 small">${prod.price}</p>
                        </td>
                        <td className="align-middle border-0">
                            <p className="mb-0 small ms-3">{prod.quantity}</p>
                        </td>
                        <td className="align-middle border-0">
                            <p className="mb-0 small">${prod.price * prod.quantity}</p>
                        </td>
                        <td className="align-middle border-0"><span className="reset-anchor" onClick={()=>useCart.removeItem(prod.id)}><i className="fas fa-trash-alt small btn btn-outline-dark"></i></span></td>
                    </tr>
                ))}
            </tbody>
            </table>
            <hr/>
            <div className='d-flex align-items-center justify-content-center'>
                    <span className="reset-anchor" onClick={()=>useCart.clear()}><i className="fas fa-trash-alt small btn btn-outline-dark"> Vaciar carrito</i></span>
            </div>
        </div>

        <div className="bg-light px-4 py-3">
            <div className="row align-items-center text-center">
                <div className="col-md-6 mb-3 mb-md-0 text-md-left"><Link to="/productos" className="btn p-0 text-dark btn-sm"><i className="fas fa-long-arrow-alt-left me-2"> </i>Seguir comprando</Link></div>
                <div className="col-md-6 text-md-right"><Link to="/checkout" className="btn btn-dark btn-sm background-hover">Finalizar compra<i className="fas fa-long-arrow-alt-right ms-2"></i></Link></div>
            </div>
        </div>
        </div>

        <div className="col-lg-4">
            <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                    <h5 className="text-uppercase mb-4">Total de la orden</h5>
                    <ul className="list-unstyled mb-0">
                        <li key={0} className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small fw-bold">Subtotal</strong><span className="text-muted small">${useCart.cart.total}.-</span></li>
                        <li key={1} className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small fw-normal">Descuento {useCart.cart.discountRate}%</strong><span className="text-muted small">${useCart.cart.total*useCart.cart.discountRate/100}.-</span></li>
                        <li key={2} className="border-bottom my-2"></li>
                        <li key={3} className="d-flex align-items-center justify-content-between mb-4"><strong className="text-uppercase small font-weight-bold">Total</strong><span id="totalOrden" >${useCart.cart.total - (useCart.cart.total*useCart.cart.discountRate/100)}.-</span></li>
                        <li key={4}>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-0">
                                <input id="formInput" className="form-control" type="text" placeholder="Ingresa tu cupon"/>
                                <button className="btn btn-dark btn-sm col-12" type="submit"> <i className="fas fa-gift me-2"></i>Aplicar cupon</button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    )

    return (
        <>
        <div className='container mb-5'>
            <Common.Title text="Carrito"></Common.Title>
            <Common.Hr></Common.Hr>
            <div className="row">
                {useCart.cart.size > 0 ? 
                                        <CartView/>
                                        :
                                        <>
                                        <h5 className='text-center'>EL CARRITO ESTA VACIO</h5>
                                        <div className="my-3 mb-md-0 text-center"><Link to="/productos" className="btn p-1 btn-outline-dark"><i className="fas fa-long-arrow-alt-left me-2"> </i>Volver al catalogo</Link></div>
                                        </>
                                        
                }

            </div>
        </div>
        </>
    )
}

export default Cart
