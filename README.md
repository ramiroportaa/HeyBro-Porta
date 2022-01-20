# E-commerce "HeyBro Indumentaria" (proyecto del curso REACTJS de CoderHouse).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ¿De que se trata?

Un simple E-commerce de indumentaria creado con ReactJs y haciendo uso de las dependencias de react-router-dom bootstrap y react-toastify. Tambien se utiliza Firebase como una especie de backend.
Cuenta con una "landing home", catalogo de productos visualizable por categorias, vista de detalle del producto, carrito, checkout, y formulario de contacto.

## Componentes relevantes:

### ItemListContainer, ItemList, Item:
En conjunto, muestran todos los productos (hasta 8 por pagina) y un listado de categorias para filtrar los mismos (cada categoria carga los mismos componentes pero el listado de productos cambia segun la categoria).
"ItemListContainer" incorpora la logica para obtener los datos y setearlos en un estado de "productos" que luego se pasa por props a "ItemList". Este ultimo se encarga de renderear un componente "Item" por cada producto del array.
Cada "Item" contiene un button que llama a una funcion "addOneItem" la cual hace uso del CartContext para añadir una unidad del producto al carrito.

### ItemDetailContainer, ItemDetail:
En conjunto muestran un solo producto en detalle (title, price, description, id, categoryId, stock, pictureUrl).
"ItemDetailContainer" incorpora la logica para obtener los datos y setear el state del item que se pasa por props a "ItemDetail" para ser rendereado.
A su vez, "ItemDetail" hace uso del CartContext y del componente "ItemCount" para, a traves de la funcion "addToCart", añadir la cantidad indicada del producto, o eliminar el mismo del carrito (funcion "removeItem").

### Cart:
Este componente muestra una tabla con cada producto añadido al carrito, su precio, cantidad y costo total. Tambien un button para eliminarlo.
Ademas, bajo la tabla se incorpora un button para vaciar el carrito completo.
Por ultimo, se muestra un recuadro con el total de la orden y un input para colocar un codigo de descuento (el unico valido es "coderhouse").

### Checkout:
Muestra un formulario que se valida por expresiones regulares (regex) que al ser enviado crea una orden y la envia a firestore, obteniendo como respuesta el id de la orden generado automaticamente por firestore.
Tambien muestra un recuadro con el resumen de la orden a enviar.

## CartContext:

Es un contexto personalizado donde se guarda el estado del carrito para acceder al mismo desde cualquier otro componente que haga uso del contexto. Tambien incluye las funciones para modificar el mismo (addItem, removeItem, clear, aplicarDescuento, etc)

## Firebase:
Se utiliza este servicio de Google para almacenamiento y consulta de datos desde "firestore" logrando asi una especie de "backend".
En el archivo "getData.js" se encuentran las funciones que hacen peticion a firestore para obtener los documentos necesarios para el funcionamiento de la app (informacion de los productos). Tambien hay una funcion "setOrder" para añadir un documento con la informacion de la orden generada.


## GIF muestra de navegabilidad.

![GIF](https://github.com/ramiroportaa/HeyBro-Porta/blob/3eef408e08e35ead69e951e7c9d6998fefbcf161/Animation.gif)
https://github.com/ramiroportaa/HeyBro-Porta/blob/3eef408e08e35ead69e951e7c9d6998fefbcf161/Animation.gif