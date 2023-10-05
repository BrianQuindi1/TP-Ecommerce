import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import ProductoCarrito from "../components/ProductoCarrito";

export default function PaginaCarrito() {
  let { productos, totalPrice, clearProducts } = useContext(CarritoContext);

  return (
    <>
      <main>
        <div className="">
          {productos.map((product, id) => (
            <ProductoCarrito key={id} product={product} />
          ))}
          <div className="">
            <button onClick={() => clearProducts()} >CHECKOUT</button>
          </div>
          <div className="">
            <h1>TOTAL: </h1>
            <h1 style={{ color: "red" }}>${totalPrice}</h1>
          </div>
        </div>
      </main>
    </>
  );
}

