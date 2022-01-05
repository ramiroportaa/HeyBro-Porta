import React from 'react'
import "./FormContacto.css"

const FormContacto = () => {
    return (
        <>
        <form className='mb-5'>
            <fieldset>
                <legend className="text-center">Formulario de Contacto</legend>

                <div className="form-group row mb-1">
                    <span className="col-1 text-center"><i className="fa fa-user bigicon"></i></span>
                    <div className="col-11">
                        <input id="fname" name="name" type="text" placeholder="Nombre" className="form-control iContacto"/>
                    </div>
                </div>
                <div className="form-group row mb-1">
                    <span className="col-1  text-center"><i className="fa fa-user bigicon"></i></span>
                    <div className="col-11">
                        <input id="lname" name="name" type="text" placeholder="Apellido" className="form-control iContacto"/>
                    </div>
                </div>

                <div className="form-group row mb-1">
                    <span className="col-1  text-center"><i className="fa fa-envelope bigicon"></i></span>
                    <div className="col-11">
                        <input id="email" name="email" type="email" placeholder="Email" className="form-control iContacto"/>
                    </div>
                </div>

                <div className="form-group row mb-1">
                    <span className="col-1  text-center"><i className="fab fa-whatsapp-square bigicon"></i></span>
                    <div className="col-11">
                        <input id="phone" name="phone" type="tel" placeholder="WhatsApp" className="form-control iContacto"/>
                    </div>
                </div>

                <div className="form-group row mb-1">
                    <span className="col-1  text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                    <div className="col-11">
                        <textarea className="form-control iContacto" id="message" name="message" placeholder="Escribe tu mensaje para nosotros aqui. Te responderemos tan pronto como podamos." rows="7"></textarea>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-12 text-center form-boton">
                        <button type="submit" className="btn btn-primary btn-lg">ENVIAR</button>
                    </div>
                </div>
            </fieldset>
        </form>
        </>
    )
}

export default FormContacto
