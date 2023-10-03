import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [productos, setProductos] = useState([]);
  const [cantProductos, setCantProductos] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProduct = (producto) => {
    setProductos([
        ...productos,
        producto
    ])
  }

  const updateTotalPrice = () => {
    let price = 0;
    productos.map((producto) => {
      price += producto.price;
    })
    setTotalPrice(price);
  }

  useEffect(() => {
    setCantProductos(productos.length);  
    updateTotalPrice();
  }, [productos]);

  if (productos !== []) {
    return (
      <CarritoContext.Provider
        value={{
          productos,
          addProduct,
          cantProductos,
          totalPrice
        }}
      >
        {props.children}
      </CarritoContext.Provider>
    );
  }
};

export default CarritoProvider;