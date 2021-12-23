import React from 'react'
import "./FormContacto.css"

const FormContacto = () => {
    return (
        <>
        <form>
            <fieldset>
                <legend class="text-center">Formulario de Contacto</legend>

                <div class="form-group row mb-1">
                    <span class="col-1 text-center"><i class="fa fa-user bigicon"></i></span>
                    <div class="col-11">
                        <input id="fname" name="name" type="text" placeholder="Nombre" class="form-control iContacto"/>
                    </div>
                </div>
                <div class="form-group row mb-1">
                    <span class="col-1  text-center"><i class="fa fa-user bigicon"></i></span>
                    <div class="col-11">
                        <input id="lname" name="name" type="text" placeholder="Apellido" class="form-control iContacto"/>
                    </div>
                </div>

                <div class="form-group row mb-1">
                    <span class="col-1  text-center"><i class="fa fa-envelope bigicon"></i></span>
                    <div class="col-11">
                        <input id="email" name="email" type="email" placeholder="Email" class="form-control iContacto"/>
                    </div>
                </div>

                <div class="form-group row mb-1">
                    <span class="col-1  text-center"><i class="fab fa-whatsapp-square bigicon"></i></span>
                    <div class="col-11">
                        <input id="phone" name="phone" type="tel" placeholder="WhatsApp" class="form-control iContacto"/>
                    </div>
                </div>

                <div class="form-group row mb-1">
                    <span class="col-1  text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                    <div class="col-11">
                        <textarea class="form-control iContacto" id="message" name="message" placeholder="Escribe tu mensaje para nosotros aqui. Te responderemos tan pronto como podamos." rows="7"></textarea>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-12 text-center form-boton">
                        <button type="submit" class="btn btn-primary btn-lg">ENVIAR</button>
                    </div>
                </div>
            </fieldset>
        </form>
        </>
    )
}

export default FormContacto
