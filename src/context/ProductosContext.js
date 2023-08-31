/*import axios from 'axios';
import React from 'react'

export default function ProductosContext() {
    axios
	.get(`https://dummyjson.com/docs/products/${id}`)
	.then((result) => {
		const productos = result.data.results;
	productos.map((producto, index) => {
		const { id, title, description, price, category, images } = producto;})
    });
  return (
    
  )
}*/
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

    export const ProductosContext = createContext();

    export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const apiUrl = 'https://dummyjson.com/docs/products/';

    useEffect(() => {
        axios.get(apiUrl)
        .then(response => {
            // Mapeamos los atributos de la API a los atributos que mencionaste
            const mappedProductos = response.data.map(producto => ({
            id: producto.id,
            title: producto.title,
            description: producto.description,
            price: producto.price,
            category: producto.category,
            images: producto.images,
            }));

            setProductos(mappedProductos);
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
    }, []);

    return (
        <ProductosContext.Provider value={{ productos }}>
        {children}
        </ProductosContext.Provider>
    );
    };

    export const useProductosContext = () => {
    const context = React.useContext(ProductosContext);
    if (!context) {
        throw new Error('useProductosContext debe ser usado dentro del ProductosProvider');
    }
    return context;
    };

