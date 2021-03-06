import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar(){
    const [mostrarCart, setMostrarCart] = React.useState(false)

    const mostrar = (size)=>(
        size>0 ? setMostrarCart(true) : setMostrarCart(false)
    )


    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark fixed-top">
        <div className="container px-5">
            <Link to={"/"} className="navbar-brand"><img src="/logo.png" alt="HEY BRO" width="45rem"/></Link>
            <Link to={"/"} className="navbar-brand">HEY BRO</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
                <ul className="navbar-nav text-center">
                    <li key="inicio" className="nav-item my-lg-2 mx-lg-2">
                    <NavLink to={"/"} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Inicio</NavLink>
                    </li>
                    <li key="productos" className="nav-item my-lg-2 mx-lg-2">
                    <NavLink to={"/productos?page=1"} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Productos</NavLink>
                    </li>
                    <li key="contacto" className="nav-item my-lg-2 mx-lg-2">
                    <NavLink to={"/contacto"} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contacto</NavLink>
                    </li>
                    <li key="cart" className={`nav-item my-lg-2 ms-lg-2 ${mostrarCart ? "" : "d-none"}`}>
                    <NavLink to={"/cart"} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}><CartWidget mostrar={mostrar}/></NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;