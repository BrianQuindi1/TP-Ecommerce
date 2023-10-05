import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Contacto from "./pages/Contacto.js";
import Navigator from "./components/Navigator";
import Home from "./pages/Home.js";
import Productos from "./pages/Productos.js";
import DetalleProducto from "./pages/DetalleProducto";
import ProductosProvider from "./context/ProductosContext";
import CategoriasProvider from "./context/CategoriasContext";
import PaginaCarrito from "./pages/PaginaCarrito.js";
import CarritoProvider from "./context/CarritoContext";



function App() {
  return (
    <CategoriasProvider>
    <ProductosProvider>
    <CarritoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/Productos" element={<Productos />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/paginacarrito" element={<PaginaCarrito />}></Route>
            <Route path={"/detalleproducto/:productId" } element={<DetalleProducto />}></Route>
            <Route path="*" element={<h1>ERROR 404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
    </ProductosProvider>
    </CategoriasProvider>
  );
}

export default App;
