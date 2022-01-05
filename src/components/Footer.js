import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const categoryList = ["remeras", "pantalones", "bermudas"]

    return (
        <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/heybro.outfits" role="button" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/heybro.ok/" role="button" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i></a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://api.whatsapp.com/send?phone=5492644865131&text=Hola!%20Tengo%20una%20consulta." role="button" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i></a>
          </section>
          <section className="mb-4">
            <p>
              Somos HEY BRO! Indumentaria Masculina. Somos tu mejor opción.
            </p>
          </section>
          <section>
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>      
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/" className="text-white">INICIO</Link>
                  </li>
                  <li>
                    <Link to="/productos" className="text-white">E-SHOP</Link>
                  </li>
                  <li>
                    <Link to="contacto" className="text-white">CONTACTO</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">CATEGORIAS</h5>
                
                <ul className="list-unstyled mb-0">
                    {categoryList.map(cat =>(
                        <li>
                            <Link to={`/productos/category/${cat}`} className="text-white text-uppercase">{cat}</Link>
                        </li>
                    ))}
                    <li>
                    <Link to="/productos" className="text-white text-uppercase">Todos los productos</Link>
                    </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.889891852303!2d-68.58001668447072!3d-31.527183981367404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9681410672252731%3A0x76bd74a1f3918381!2sHey%20Bro*21%20Outfits!5e0!3m2!1ses!2sar!4v1632608056506!5m2!1ses!2sar" width="300rem" height="220rem" loading="lazy"></iframe>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center p-3">
          © 2021 Copyright:
          <p className="text-white">Todos los derechos reservados</p>
        </div>
      </footer>
    )
}

export default Footer
