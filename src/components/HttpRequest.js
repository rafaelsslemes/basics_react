import { prettyDOM } from '@testing-library/react';
import React from 'react'
import { useState, useEffect } from 'react'

const HttpRequest = () => {

    const backendURL = "http://localhost:3000/products";

    const [products, setProducts] = useState([]);

    // Get Data from RestAPI
    // useEffect prevents void rerenders
    useEffect(() => {

        async function fetchData(){
            const response = await fetch(backendURL);
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, [])

    console.log(products);

    return (
        <div>
            <h2>
                Product List
            </h2>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        {product.name} 'R$' {product.price}
                    </li>
                ))}
            </ul>    

        </div>
    )
}

export default HttpRequest