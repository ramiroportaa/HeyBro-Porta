import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, title, description, price, pictureUrl, stock, category}) => {

    const Stars = ()=>{
      return(
        <ul className="list-inline mb-2">
        <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
        <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
        <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
        <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
        <li className="list-inline-item m-0"><i className="fas fa-star-half-alt small text-warning"></i></li>
    </ul>
      )
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
                <li className="px-3 py-2 mb-1 bg-white"><strong className="text-uppercase">Stock disponible: </strong><span className="ms-2 text-muted">{stock}</span></li>
                <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Categoria: </strong><Link to={`/productos/category/${category}`} className="reset-anchor ms-2 text-uppercase">{category}</Link></li>
              </ul>

                <ItemCount stock={stock} initial="0"/>

                <div className='mt-md-5 d-flex justify-content-center justify-content-md-end'>
              <Link to="/productos" className='btn btn-dark background-hover'>Volver al catálogo <span className='ms-1'>←</span></Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
