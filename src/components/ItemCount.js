import React, {useState} from 'react';

export default function ItemCount ({stock, initial}) {

    const [Contador, SetContador] = useState({Stock: Number(stock), Initial: Number(initial)})
    const Aumentar = ()=>{
        (Contador.Stock > 0) ? SetContador({ Initial: Contador.Initial + 1, Stock: Contador.Stock - 1}) : console.log("STOCK MAXIMO ALCANZADO");
    }
    const Disminuir = ()=>{
        (Contador.Initial > 0) ? SetContador({ Initial: Contador.Initial - 1, Stock: Contador.Stock + 1}) : console.log("EL CONTADOR ESTA EN CERO");
    }
    
    function onAdd () {
        alert(`Agregaste ${Contador.Initial} unidades al carrito`)
    }

    return (
        <div className="row align-items-stretch my-4">
            <div className="col-sm-7 pr-sm-0">
                <div className="d-flex align-items-center justify-content-between p-1 border"><span className="small text-uppercase text-gray me-4 no-select">Cantidad</span>
                    <div className="quantity">
                    <button className="dec-btn p-0" onClick={Disminuir}><i className="fas fa-caret-left"></i></button>
                    <input className="form-control border-0 shadow-0 p-0" type="text" value={Contador.Initial}/>
                    <button className="inc-btn p-0" onClick={Aumentar}><i className="fas fa-caret-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-sm-5 pl-sm-0"><a href=" " className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0" onClick={onAdd}>Agregar al carrito</a></div>
        </div>
    )
}