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



function App() {
  return (
    <ProductosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/Productos" element={<Productos />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/detalleProducto" element={<DetalleProducto />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductosProvider>
  );
}

export default App;
