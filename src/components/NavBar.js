import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar(){
    const Titulo = (props)=>(
        <>
            <Link to={"/"} className="navbar-brand"><img src={props.imgSrc} alt={props.titulo} width="45rem"/></Link>
            <Link to={"/"} className="navbar-brand">{props.titulo}</Link>
        </>
    );

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
                    <NavLink to={"/"} activeClassName="active" className="nav-link">Inicio</NavLink>
                    </li>
                    <li className="nav-item my-lg-2 mx-lg-2">
                    <NavLink to={"/productos"} activeClassName="active" className="nav-link">Productos</NavLink>
                    </li>
                    <li className="nav-item my-lg-2 mx-lg-2">
                    <NavLink to={"/contacto"} activeClassName="active" className="nav-link">Contacto</NavLink>
                    </li>
                    <li className="nav-item my-lg-2 ms-lg-2">
                    <NavLink to={"/cart"} activeClassName="active" className="nav-link"><CartWidget/></NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;