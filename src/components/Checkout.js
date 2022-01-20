import React, {useState} from 'react'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'
import Common from './Common'
import { setOrder } from '../services/getData'
import { ToastContainer, toast } from 'react-toastify';

const Checkout = () => {
    //Almacenamos los valores a usar del CartContext.
    const useCart = React.useContext(CartContext);
    const items = useCart.cart.items
    const subtotal = useCart.cart.total
    const discountRate =  useCart.cart.discountRate
    const discount = useCart.cart.total * useCart.cart.discountRate / 100
    const total = useCart.cart.total * (1 - useCart.cart.discountRate / 100)

    //Mapeamos items para crear array de los items a pasar a la orden.
    const itemsOrder = items.map(item =>(
        {id: item.id, price: item.price, quantity: item.quantity, title: item.title}
    ))

    //Hook de state para verificar si el checkbox de "enviar a un domicilio distinto esta activo"
    const [isChecked, setIsChecked] = useState(false)

    //Hooks states para validaciones del formulario.
    const [nombre, setNombre] = useState()
    const [nombreEnvio, setNombreEnvio] = useState()
    const [apellido, setApellido] = useState()
    const [apellidoEnvio, setApellidoEnvio] = useState()
    const [email, setEmail] = useState()
    const [emailEnvio, setEmailEnvio] = useState()
    const [telefono, setTelefono] = useState()
    const [telefonoEnvio, setTelefonoEnvio] = useState()
    const [dni, setDni] = useState()
    const [dniEnvio, setDniEnvio] = useState()
    const [domicilio, setDomicilio] = useState()
    const [domicilioEnvio, setDomicilioEnvio] = useState()
    const [ciudad, setCiudad] = useState()
    const [ciudadEnvio, setCiudadEnvio] = useState()
    const [provincia, setProvincia] = useState()
    const [provinciaEnvio, setProvinciaEnvio] = useState()

    //Regex de validacion formulario.
    const nombreRegex = /^[a-zA-Z+ ?]{3,16}$/
    const emailRegex = /^[a-zA-Z0-9\._-]+@{1}[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/
    const telRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{7,8}$/
    const dniRegex = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/
    const domicilioRegex = /^[a-zA-Z0-9+ ?\._-]{3,50}$/

    
    //Function para validar cada input del formulario.
    const validar=(value, regex, set)=>{
        if (value.trim()){
            regex.test(value) ? set(value) : set();
        }else {
            set();
        };
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (isChecked) {
            if ((nombre && apellido && email && telefono && dni && domicilio && ciudad && provincia
                && nombreEnvio && apellidoEnvio && emailEnvio && telefonoEnvio && dniEnvio && domicilioEnvio && ciudadEnvio && provinciaEnvio)){
                
                console.log("DATOS CORRECTOS");

                //Si el form es correcto, creo la orden con destinatario aparte y la mando a firestore.
                const order = {
                    buyer: {address: domicilio, city: ciudad, dni: dni, email: email, lastName: apellido, name: nombre, phone: telefono, province: provincia},
                    date: new Date(),
                    items: itemsOrder,
                    subtotal: subtotal,
                    discount: discount,
                    total: total,
                    addressee: {address: domicilioEnvio, city: ciudadEnvio, dni: dniEnvio, email: emailEnvio, lastName: apellidoEnvio, name: nombreEnvio, phone: telefonoEnvio, province: provinciaEnvio}
                }

                const prom = setOrder(order)
                toast.promise(prom,
                    {
                        pending: 'Enviando orden...',
                        success: {
                            render({data}){
                                useCart.clear()
                                return `Enviada con éxito 👌.
                                        Su n° de orden es: ${data.id}`
                            },
                            autoClose: false,
                            closeOnClick: false,
                            draggable: false
                            },
                        error: 'Orden rechazada 🤯',
                    })
                    
            }else{
                toast.error("DATOS DEL FORMULARIO INCORRECTOS, REVISE CAMPOS EN ROJO");
            }
        }else{
            if ((nombre && apellido && email && telefono && dni && domicilio && ciudad && provincia)){

                console.log("DATOS CORRECTOS");

                //Si el form es correcto, creo la orden SIN destinatario aparte y la mando a firestore.
                const order = {
                    buyer: {address: domicilio, city: ciudad, dni: dni, email: email, lastName: apellido, name: nombre, phone: telefono, province: provincia},
                    date: new Date(),
                    items: itemsOrder,
                    subtotal: subtotal,
                    discount: discount,
                    total: total
                }

                const prom = setOrder(order)
                toast.promise(prom,
                    {
                        pending: 'Enviando orden...',
                        success: {
                            render({data}){
                                useCart.clear()
                                return `Enviada con éxito 👌.
                                        Su n° de orden es: ${data.id}`
                            },
                            autoClose: false,
                            closeOnClick: false,
                            draggable: false
                            },
                        error: 'Orden rechazada 🤯',
                    })

            }else{
                toast.error("DATOS DEL FORMULARIO INCORRECTOS, REVISE CAMPOS EN ROJO");
            } 
        }
    }

    return (
        <>
        <div className='container mb-5'>
            <Common.Title text="Checkout"></Common.Title>
            <Common.Hr></Common.Hr>
            <div className="row">
                {useCart.cart.size > 0 ? 
                                        <div className="py-5">
                                            <h2 className="h5 text-uppercase mb-4">Detalles de facturacion y envio</h2>
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <form id="form-checkout" onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-lg-6 form-group">
                                                        <label className="text-small text-uppercase" for="nombre">Nombre</label>
                                                        <input className={`form-input form-control form-control-lg ${nombre ? "border border-success" : "border border-danger"}`} id="nombre" type="text" placeholder="Ingresa tu nombre" onChange={(e)=>validar(e.target.value , nombreRegex, setNombre)}/>
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                        <label className="text-small text-uppercase" for="apellido">Apellido</label>
                                                        <input className={`form-input form-control form-control-lg ${apellido ? "border border-success" : "border border-danger"}`} id="apellido" type="text" placeholder="Ingresa tu apellido" onChange={(e)=>validar(e.target.value , nombreRegex, setApellido)}/>
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                        <label className="text-small text-uppercase" for="email">Email</label>
                                                        <input className={`form-input form-control form-control-lg ${email ? "border border-success" : "border border-danger"}`} id="email" type="email" placeholder="ej. Juan@ejemplo.com" onChange={(e)=>validar(e.target.value , emailRegex, setEmail)}/>
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                        <label className="text-small text-uppercase" for="tel">Telefono</label>
                                                        <input className={`form-input form-control form-control-lg ${telefono ? "border border-success" : "border border-danger"}`} id="tel" type="tel" placeholder="ej. 2645279783"onChange={(e)=>validar(e.target.value , telRegex, setTelefono)}/>
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                        <label className="text-small text-uppercase" for="dni">DNI (sin puntos)</label>
                                                        <input className={`form-input form-control form-control-lg ${dni ? "border border-success" : "border border-danger"}`} id="dni" type="number" placeholder="ej. 40578954" onChange={(e)=>validar(e.target.value , dniRegex, setDni)}/>
                                                        </div>
                                                        <div className="col-lg-12 form-group">
                                                        <label className="text-small text-uppercase" for="domicilio">Domicilio</label>
                                                        <input className={`form-input form-control form-control-lg ${domicilio ? "border border-success" : "border border-danger"}`} id="domicilio" type="text" placeholder="Nombre de la calle y numeración" onChange={(e)=>validar(e.target.value , domicilioRegex, setDomicilio)}/>
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                        <label className="text-small text-uppercase" for="ciudad">Ciudad</label>
                                                        <input className={`form-input form-control form-control-lg ${ciudad ? "border border-success" : "border border-danger"}`} id="ciudad" type="text" onChange={(e)=>validar(e.target.value , domicilioRegex, setCiudad)}/>
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                        <label className="text-small text-uppercase" for="provincia">Provincia</label>
                                                        <input className={`form-input form-control form-control-lg ${provincia ? "border border-success" : "border border-danger"}`} id="provincia" type="text" onChange={(e)=>validar(e.target.value , domicilioRegex, setProvincia)}/>
                                                        </div>
                                                        <div className="col-lg-6 form-group mt-3">
                                                        <div className="custom-control custom-checkbox">
                                                            <input className="custom-control-input" id="alternateAddressCheckbox" type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked}/>
                                                            <label className="custom-control-label text-small" for="alternateAddressCheckbox">Enviar a un domicilio distinto al de facturación</label>
                                                        </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                        <div className={`row ${isChecked ? "" : "d-none"}`} id="alternateAddress">
                                                            <div className="col-12 mt-4">
                                                            <h2 className="h4 text-uppercase mb-4">DETALLES DE ENVIO</h2>
                                                            </div>
                                                            <div className="col-lg-6 form-group">
                                                            <label className="text-small text-uppercase" for="nombreEnvio">Nombre</label>
                                                            <input className={`form-input form-control form-control-lg ${nombreEnvio ? "border border-success" : "border border-danger"}`} id="nombreEnvio" type="text" placeholder="Ingresa tu nombre" onChange={(e)=>validar(e.target.value , nombreRegex, setNombreEnvio)}/>
                                                            </div>
                                                            <div className="col-lg-6 form-group">
                                                            <label className="text-small text-uppercase" for="apellidoEnvio">Apellido</label>
                                                            <input className={`form-input form-control form-control-lg ${apellidoEnvio ? "border border-success" : "border border-danger"}`} id="apellidoEnvio" type="text" placeholder="Ingresa tu apellido" onChange={(e)=>validar(e.target.value , nombreRegex, setApellidoEnvio)}/>
                                                            </div>
                                                            <div className="col-lg-6 form-group">
                                                            <label className="text-small text-uppercase" for="emailEnvio">Email</label>
                                                            <input className={`form-input form-control form-control-lg ${emailEnvio ? "border border-success" : "border border-danger"}`} id="emailEnvio" type="email" placeholder="ej. Juan@ejemplo.com" onChange={(e)=>validar(e.target.value , emailRegex, setEmailEnvio)}/>
                                                            </div>
                                                            <div className="col-lg-6 form-group">
                                                            <label className="text-small text-uppercase" for="telEnvio">Telefono</label>
                                                            <input className={`form-input form-control form-control-lg ${telefonoEnvio ? "border border-success" : "border border-danger"}`} id="telEnvio" type="tel" placeholder="ej. 2645279783" onChange={(e)=>validar(e.target.value , telRegex, setTelefonoEnvio)}/>
                                                            </div>
                                                            <div className="col-lg-6 form-group">
                                                            <label className="text-small text-uppercase" for="dniEnvio">DNI (sin puntos)</label>
                                                            <input className={`form-input form-control form-control-lg ${dniEnvio ? "border border-success" : "border border-danger"}`} id="dniEnvio" type="number" placeholder="ej. 40578954" onChange={(e)=>validar(e.target.value , dniRegex, setDniEnvio)}/>
                                                            </div>
                                                            <div className="col-lg-12 form-group">
                                                            <label className="text-small text-uppercase" for="domicilioEnvio">Domicilio</label>
                                                            <input className={`form-input form-control form-control-lg ${domicilioEnvio ? "border border-success" : "border border-danger"}`} id="domicilioEnvio" type="text" placeholder="Nombre de la calle y numeración" onChange={(e)=>validar(e.target.value , domicilioRegex, setDomicilioEnvio)}/>
                                                            </div>
                                                            <div className="col-lg-6 form-group">
                                                            <label className="text-small text-uppercase" for="ciudadEnvio">Ciudad</label>
                                                            <input className={`form-input form-control form-control-lg ${ciudadEnvio ? "border border-success" : "border border-danger"}`} id="ciudadEnvio" type="text" onChange={(e)=>validar(e.target.value , domicilioRegex, setCiudadEnvio)}/>
                                                            </div>
                                                            <div className="col-lg-6 form-group">
                                                            <label className="text-small text-uppercase" for="provinciaEnvio">Provincia</label>
                                                            <input className={`form-input form-control form-control-lg ${provinciaEnvio ? "border border-success" : "border border-danger"}`} id="provinciaEnvio" type="text" onChange={(e)=>validar(e.target.value , domicilioRegex, setProvinciaEnvio)}/>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="col-lg-12 form-group mt-3">
                                                        <button className="btn btn-dark" type="submit">Enviar orden</button>
                                                        </div>
                                                    </div>
                                                    </form>
                                                </div>
                                    
                                                <div className="col-lg-4">
                                                    <div className="card border-0 rounded-0 p-lg-4 bg-light">
                                                    <div className="card-body">
                                                        <h5 className="text-uppercase mb-4">Tu orden</h5>
                                                        <ul className="list-unstyled mb-0">
                                                            {items.map(item =>(
                                                                <>
                                                                <li key={item.title} className = "d-flex align-items-center justify-content-between">
                                                                <strong className="small font-weight-bold">({item.quantity}) - {item.title}</strong>
                                                                <span className="text-muted small">${item.price * item.quantity}</span>
                                                                </li>
                                                                <li key={item.id} className = "border-bottom my-2">
                                                                </li>
                                                                </>
                                                            ))
                                                            }
                                    
                                                            {discountRate ?
                                                                            <>
                                                                            <li key="subtotal" className = "d-flex align-items-center justify-content-between mt-2">
                                                                            <strong className="text-uppercase small font-weight-bold">Subtotal</strong>
                                                                            <span>${subtotal}</span>
                                                                            </li>
                                                                            <li key="desc" className = "d-flex align-items-center justify-content-between mt-2">
                                                                                <strong className="text-uppercase small font-weight-bold">Descuento {discountRate}%</strong>
                                                                                <span>$({discount})</span>
                                                                            </li>
                                                                            </>
                                                                            :
                                                                            null
                                                            }
                                    
                                                            <li key="total" className = "d-flex align-items-center justify-content-between mt-2 p-2 bg-dark text-white">
                                                                <strong className="text-uppercase small font-weight-bold">Total</strong>
                                                                <span>${total}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <>
                                        <h5 className='text-center'>EL CARRITO ESTA VACIO</h5>
                                        <div className="my-3 mb-md-0 text-center"><Link to="/productos" className="btn p-1 btn-outline-dark"><i className="fas fa-long-arrow-alt-left me-2"> </i>Volver al catalogo</Link></div>
                                        </>
                                        
                }

            </div>
        </div>
        <ToastContainer />
        </>
    )
}

export default Checkout
