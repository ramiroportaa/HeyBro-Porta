const Common = {
    Title: ({text})=>(<h1 className="mt-5 pt-5 text-center text-uppercase">{text}</h1>),
    Hr: ()=>(<hr className="mb-5"/>),
    Loading: ()=>(  <div className="spinner-border text-warning" style={{width: "80px", height: "80px"}} role="status">
                        <span className="sr-only">Cargando...</span>
                    </div>)
}

export default Common