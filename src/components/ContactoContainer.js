import React from 'react'
import FormContacto from './FormContacto'
import Common from './Common'

const ContactoContainer = () => {
    return (
        <div className='container'>
            <Common.Title text="CONTACTO"></Common.Title>
            <Common.Hr></Common.Hr>
            <div className="row">
            <div className="col-md-12">
                <div className="well well-sm form">
                    <FormContacto/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ContactoContainer
