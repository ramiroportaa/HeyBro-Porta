import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";

const Home = () => {
    return (
        <>
            <div id="portada" className="bg-image" Style="background-image: url(/portada.jpg); width: 100vw; height: 100vh;">
              <div className="container py-5">
                <div className="row px-4 px-lg-5">
                  <div className="col-lg-6">
                    <div Style="min-height: 22rem;">
                      <h2 className="portada-text mt-5">
                        COMIENZA A COMPRAR AHORA!
                      </h2>
                    </div>
                    <Link to="/productos" className="btn portada-boton" >IR A LA TIENDA</Link>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default Home
