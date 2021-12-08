import React from 'react'
/* Importamos provisoriamente ItemCount para probarlo */
import ItemCount from './ItemCount';

export default function ItemListContainer (props) {
    const Greeting = props.greeting;
    return (
        <div className="container">
            <h2 className="mt-5 pt-5 text-center"> {Greeting} </h2>

            {/* Uso provisorio de ItemCount */}
            <div className="d-flex align-items-center justify-content-center">
                <ItemCount stock="5" initial="0"/>
            </div>

        </div>
    )
}