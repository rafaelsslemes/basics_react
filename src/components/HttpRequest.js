import { prettyDOM } from '@testing-library/react';
import React from 'react'
import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';

const HttpRequest = () => {

    const backendURL = "http://localhost:3000/products";

    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    // Get Data from RestAPI
    const {data : items} = useFetch(backendURL); // 'a:b' syntax rename const
    
    // Replaced by custom Hook useFetch

    // useEffect prevents void rerenders
    // useEffect(() => {

    //     async function fetchData(){
    //         const response = await fetch(backendURL);
    //         const data = await response.json();
    //         setProducts(data);
    //     }
    //     fetchData();
    // }, [])

    // console.log(products);

    async function handleSubmit(event){
        event.preventDefault();

        // Auto creates an object with keys and values from useState
        const product = {
            name, price
        }

        const response = await fetch(backendURL, 
            {
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(product)
            },
        );
        
        // Update available data, dismiss a reload of colection
        const added = await response.json();
        setProducts((prevList)=> [...prevList, added]);

        setName('');
        setPrice('');
    }

    return (
        <div>
            <h2>
                Product List
            </h2>
            <ul>
                {items && items.map((product)=>(
                    <li key={product.id}>
                        {product.name} R$ {product.price}
                    </li>
                ))}
            </ul>

            <div className='add-product'>
                <h2>Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:
                        <input type='text' name='name' value={name} 
                            onChange={(e)=>setName(e.target.value)}>
                        </input>
                    </label>
                    <label>Price:
                        <input type='text' name='price' value={price} 
                            onChange={(e)=>setPrice(e.target.value)}>
                        </input>
                    </label>
                    <input type='submit' value="Register"/>
                </form>

            </div>    

        </div>

    )
}

export default HttpRequest