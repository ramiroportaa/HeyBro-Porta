import React, {useState} from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext';

const ItemDetail = ({id, title, description, price, pictureUrl, stock, categoryId}) => {

    const Stars = ()=>(
        <ul className="list-inline mb-2">
        <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
        <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
        <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
        <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
        <li className="list-inline-item m-0"><i className="fas fa-star-half-alt small text-warning"></i></li>
    </ul>
    )

    const FinalizarCompra = ()=>(
      <div className="row my-4">
          <p className='text-muted text-center text-md-end'>Ya hay {cantidadAgregada} unidad/es en el carrito <i className="ms-1 fas fa-trash-alt small btn btn-outline-dark" onClick={removeItem}></i></p>
          <div className="d-flex justify-content-center justify-content-md-end">
          <Link to="/cart" className='btn btn-dark background-hover'>Finalizar Compra <span className='ms-1'>→</span></Link>
          </div>
      </div>        
    )

    const useCart = React.useContext(CartContext);

    const itemCartQuantity = useCart.getItemQuantity(id)

    const [cantidadAgregada, setCantidadAgregada] = useState(itemCartQuantity)

    function addToCart (cantidad) {
      if ((stock >= cantidad) && (cantidad > 0)) {
        setCantidadAgregada(cantidad)
        useCart.addItem({id: id, title: title, price: price, pictureUrl: pictureUrl},cantidad)
      }else if (stock===0) {
        alert("NO HAY STOCK");  
      }else{
        alert("Ingrese al menos 1 unidad")
      }
    }

    function removeItem () {
      useCart.removeItem(id)
      setCantidadAgregada(0)
    }

    return (
        <div className='row'>
          {/* FOTO */}
            <div className="col-lg-6">
              <div className="row m-sm-0">
                  <div className="text-center">
                      <img className="img-fluid" src={`../../${pictureUrl}`} alt={title}/>
                  </div>
              </div>
            </div>
            {/* DETALLE */}
            <div className="col-lg-6">
                <Stars/>
                <h1>{title}</h1>
                <p className="text-muted lead">${price}.-</p>
                <p className="text-small mb-4">
                    {description}
                </p>
                <ul className="list-unstyled small d-inline-block">
                <li className="px-3 py-2 mb-1 bg-white"><strong className="text-uppercase">ID del producto: </strong><span className="ms-2 text-muted">{id}</span></li>
                <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Categoria: </strong><Link to={`/productos/category/${categoryId}`} className="reset-anchor ms-2 text-uppercase">{categoryId}</Link></li>
                <li className="px-3 py-2 mb-1 bg-white"><strong className="text-uppercase">Stock disponible: </strong><span className="ms-2 text-muted">{stock}</span></li>
              </ul>

                {(cantidadAgregada > 0) ?
                                        <FinalizarCompra/>
                                        :
                                        <ItemCount stock={stock} initial="0" onAdd={addToCart}/>


                }

                <div className='d-flex justify-content-center justify-content-md-end'>
                  <Link to="/productos" className='btn btn-outline-dark'>Volver al catálogo <span className='ms-1'>←</span></Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
