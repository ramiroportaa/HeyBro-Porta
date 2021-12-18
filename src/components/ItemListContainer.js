import React from 'react'
import ItemList from './ItemList';

export default function ItemListContainer (props) {
    const Greeting = props.greeting;
    return (
        <div className="container">
            <h2 className="mt-5 pt-5 mb-5 text-center"> {Greeting} </h2>
            <ItemList></ItemList>
        </div>
    )
}