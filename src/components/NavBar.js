import React from 'react'
import CartWidget from './CartWidget';

const Titulo = (props)=>(
    <>
        <a className="navbar-brand" href=" "><img src={props.imgSrc} alt={props.titulo} width="45rem"/></a>
        <a className="navbar-brand" href=" ">{props.titulo}</a>
    </>
);

function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark fixed-top">
        <div className="container px-5">
            <Titulo titulo="HEY BRO" imgSrc="logo.png"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
                <ul className="navbar-nav text-center">
                    <li className="nav-item my-lg-2 mx-lg-2">
                    <a className="nav-link active" aria-current="page" href=" ">Inicio</a>
                    </li>
                    <li className="nav-item my-lg-2 mx-lg-2">
                    <a className="nav-link" href=" ">Productos</a>
                    </li>
                    <li className="nav-item my-lg-2 mx-lg-2">
                    <a className="nav-link" href=" ">Contacto</a>
                    </li>
                    <li className="nav-item my-lg-3 ms-lg-2">
                        <CartWidget/>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;