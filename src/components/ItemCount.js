import React, {useState, useEffect} from 'react';
import "./ItemCount.css";

export default function ItemCount ({stock, initial, onAdd}) {

    const [Contador, SetContador] = useState({Disponible: 0, Valor: 0})
    useEffect(() => {
        SetContador({Disponible: Number(stock) - Number(initial), Valor: Number(initial)})
    },[stock, initial])
    
    const Aumentar = ()=>{
        (Contador.Disponible > 0) ? SetContador({ Valor: Contador.Valor + 1, Disponible: Contador.Disponible - 1}) : console.log("STOCK MAXIMO ALCANZADO");
    }
    const Disminuir = ()=>{
        (Contador.Valor > 0) ? SetContador({ Valor: Contador.Valor - 1, Disponible: Contador.Disponible + 1}) : console.log("EL CONTADOR ESTA EN CERO");
    }

    return (
        <div className="row align-items-stretch my-4">
            <div className="col-sm-7 pr-sm-0">
                <div className="d-flex align-items-center justify-content-between p-1 border"><span className="small text-uppercase text-gray me-4 no-select">Cantidad</span>
                    <div className="quantity">
                    <button className="p-0" onClick={Disminuir}><i className="fas fa-caret-left"></i></button>
                    <input className="form-control border-0 shadow-0 p-0" type="text" value={Contador.Valor}/>
                    <button className="p-0" onClick={Aumentar}><i className="fas fa-caret-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-sm-5 pl-sm-0 d-flex justify-content-end">
                <button className="btn btn-dark btn-sm btn-block h-100 px-5 background-hover" onClick={()=> onAdd(Contador.Valor)}>Agregar al carrito</button>
            </div>
        </div>
    )
}