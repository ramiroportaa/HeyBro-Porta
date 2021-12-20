import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

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
            <div className="col-lg-6">
              <div className="row m-sm-0">
                  <div className="text-center">
                      <img className="img-fluid" src={`../../${item.pictureUrl}`} alt={item.title}/>
                  </div>
              </div>
            </div>
            {/* DETALLE */}
            <div className="col-lg-6">
                <Stars/>
                <h1>{item.title}</h1>
                <p className="text-muted lead">${item.price}.-</p>
                <p className="text-small mb-4">
                    {item.description}
                </p>

                <ItemCount stock={item.stock} initial="0"/>

            </div>
              <ul className="list-unstyled small d-inline-block">
                <li className="px-3 py-2 mb-1 bg-white"><strong className="text-uppercase">idProducto: </strong><span className="ms-2 text-muted">{item.id}</span></li>
                <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Categoria: </strong><a className="reset-anchor ms-2" href="#">Aqui va la categoria...</a></li>
              </ul>
        </div>
    )
}

export default ItemDetail
