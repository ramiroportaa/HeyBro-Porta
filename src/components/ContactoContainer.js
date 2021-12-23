import React from 'react'
import FormContacto from './FormContacto'

const ContactoContainer = () => {
    return (
        <div className='container'>
            <h1 className='mt-5 pt-5 text-center text-uppercase'>Contacto</h1>
            <hr className="mb-5"/>
            <div class="row">
            <div class="col-md-12">
                <div class="well well-sm form">
                    <FormContacto/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ContactoContainer
