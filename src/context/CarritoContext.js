import React, { createContext, useState } from "react";


export const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  const addProduct = (product) => {
    setCarrito([
        ...carrito,
        product
    ])
  }

  if (carrito !== []) {
    return (
      <CarritoContext.Provider
        value={{
            carrito,
          addProduct
        }}
      >
        {props.children}
      </CarritoContext.Provider>
    );
  }
};

export default CarritoProvider;