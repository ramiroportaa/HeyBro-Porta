import React from 'react'

export default function ItemListContainer (props) {
    const Greeting = props.greeting;
    return (
        <h2 className="mt-5 pt-5 text-center"> {Greeting} </h2>
    )
}