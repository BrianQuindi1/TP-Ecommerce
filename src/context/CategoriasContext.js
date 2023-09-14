import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);
    const apiUrl = 'https://dummyjson.com/products/categories/';

    useEffect(() => {
        axios.get(apiUrl)
        .then(response => {
            console.log(response.data)
            setCategorias(response.data);
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
    }, []);    

    return (
        <CategoriasContext.Provider value={{ 
            categorias
        }}>
        {children}
        </CategoriasContext.Provider>
    );
};

export default CategoriasProvider;