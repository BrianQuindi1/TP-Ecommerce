import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const apiUrl = 'https://dummyjson.com/products';

    useEffect(() => {
        axios.get(apiUrl)
        .then(response => {
            //console.log(response.data.products)
            setProductos(response.data.products);
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
    }, []);    

    return (
        <ProductosContext.Provider value={{ 
            productos
        }}>
        {children}
        </ProductosContext.Provider>
    );
};

export default ProductosProvider;