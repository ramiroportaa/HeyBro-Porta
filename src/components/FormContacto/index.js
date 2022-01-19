import React, {useState} from 'react'
import "./FormContacto.css"
import { ToastContainer, toast } from 'react-toastify';

const FormContacto = () => {
    //Regex de validacion formulario.
    const nombreRegex = /^[a-zA-Z+ ?]{3,16}$/
    const emailRegex = /^[a-zA-Z0-9\._-]+@{1}[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/
    const telRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{7,8}$/

    //Hooks states para validaciones del formulario.
    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [email, setEmail] = useState()
    const [telefono, setTelefono] = useState()

    //Functions para validar cada input del formulario.
    const valorNombre=(value)=>{
        nombreRegex.test(value) ? setNombre(value) : setNombre();
    }

    const valorApellido=(value)=>{
        nombreRegex.test(value) ? setApellido(value) : setApellido();
    }

    const valorEmail=(value)=>{
        emailRegex.test(value) ? setEmail(value) : setEmail();
    }

    const valorTel=(value)=>{
        telRegex.test(value) ? setTelefono(value) : setTelefono();
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (nombre && apellido && email && telefono){
            toast.success("MENSAJE ENVIADO")
            e.target.reset()
            setNombre()
            setApellido()
            setEmail()
            setTelefono()
        }else{
            toast.error("ERROR, Revise campos en rojo")
        }
    }

    return (
        <>
        <form className='mb-5' onSubmit={handleSubmit}>
            <fieldset>
                <legend className="text-center">Formulario de Contacto</legend>

                <div className="form-group row mb-1">
                    <span className="col-1 text-center"><i className="fa fa-user bigicon"></i></span>
                    <div className="col-11">
                        <input id="fname" name="name" type="text" placeholder="Nombre" className={`form-control iContacto ${nombre ? "border border-success" : "border border-danger"}`} onChange={(e)=>valorNombre(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row mb-1">
                    <span className="col-1  text-center"><i className="fa fa-user bigicon"></i></span>
                    <div className="col-11">
                        <input id="lname" name="name" type="text" placeholder="Apellido" className={`form-control iContacto ${apellido ? "border border-success" : "border border-danger"}`} onChange={(e)=>valorApellido(e.target.value)}/>
                    </div>
                </div>

                <div className="form-group row mb-1">
                    <span className="col-1  text-center"><i className="fa fa-envelope bigicon"></i></span>
                    <div className="col-11">
                        <input id="email" name="email" type="email" placeholder="Email" className={`form-control iContacto ${email ? "border border-success" : "border border-danger"}`} onChange={(e)=>valorEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="form-group row mb-1">
                    <span className="col-1  text-center"><i className="fab fa-whatsapp-square bigicon"></i></span>
                    <div className="col-11">
                        <input id="phone" name="phone" type="tel" placeholder="WhatsApp" className={`form-control iContacto ${telefono ? "border border-success" : "border border-danger"}`} onChange={(e)=>valorTel(e.target.value)}/>
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
        <ToastContainer />
        </>
    )
}

export default FormContacto
