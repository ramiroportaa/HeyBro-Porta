import React from 'react';
import Item from './Item';

const ItemList =({items}) => {
    const productos = items
    return (
        <div className="row">
            {
            /* Hago iteracion de los productos usando map y creando un componente Item por cada producto */
            productos.map(prod => (
                <div key={prod.id} className="col-xl-3 col-lg-3 col-sm-6">
                    <Item {...prod}></Item>
                </div>
            ))
            }        
        </div>
    )
}

export default ItemList
