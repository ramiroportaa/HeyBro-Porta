import { getFirestore, collection, getDocs, query, where, limit, startAt, doc, getDoc, addDoc } from 'firebase/firestore/lite';

//Function para obtener la coleccion COMPLETA. Limitada en caso de pasar un parametro "max" y devuelve hasta el limite a partir del item que se pase por parametro.
export const getCollection = (max=9999, item)=>{
    const db = getFirestore();
    const itemCollection = item ? query(collection(db, "items"), limit(max), startAt(item)) : query(collection(db, "items"), limit(max));
    const data = getDocs(itemCollection);
    return data
}

//Function para obtener la coleccion de items por CATEGORIA. Limitada en caso de pasar un parametro "max" y devuelve hasta el limite a partir del item que se pase por parametro.
export const getCollectionByCategory = (categoryId, max=9999, item)=>{
    const db = getFirestore();
    const itemCollection = item ? query(collection(db, "items"), where("categoryId", "==", categoryId), limit(max), startAt(item)) : query(collection(db, "items"), where("categoryId", "==", categoryId), limit(max));
    const data = getDocs(itemCollection);
    return data
}

//Function para obtener un UNICO documento por id.
export const getDocument = (id)=>{
    const db = getFirestore();
    const itemRef = doc(db, "items", id)
    const data = getDoc(itemRef);
    return data
}

//Function para ENVIAR una orden.
export const setOrder = (order)=>{
    const db = getFirestore();
    const ordersCollection = collection(db, "orders")
    const data = addDoc(ordersCollection, order)
    return data
}
