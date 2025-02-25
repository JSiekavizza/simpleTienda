import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./assets/Components/Context/dataContext";

import CartContent from "./assets/Components/CartContent/CartContent";

import Menu from "./assets/Menu/Menu";

import Home from "./assets/Home/Home";
import Hombre from "./assets/Components/Categorias/Hombre";
import Mujer from "./assets/Components/Categorias/Mujer";
import Cosas from "./assets/Components/Categorias/Cosas";
import Sale from "./assets/Components/Categorias/Sale";
import Esenciales from "./assets/Components/Categorias/Esenciales";
import AllProducts from "./assets/Components/Categorias/AllProducts";
import Productos from "./assets/Components/Productos/Productos";
import ProductDetail from "./assets/Components/Productos/ProductDetail";
import Footer from "./assets/Components/Footer/Footer";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<CartContent />}></Route>
            <Route path="/categoria/hombres" element={<Hombre />} />
            <Route path="/categoria/mujeres" element={<Mujer />} />
            <Route path="/categoria/cosas" element={<Cosas />} />
            <Route path="/categoria/sales" element={<Sale />} />
            <Route path="/categorias/esenciales" element={<Esenciales />} />
            <Route path="/categorias/allProducts" element={<AllProducts />} />
            <Route path="/Productos/Productos" element={<Productos />} />
            <Route path="/producto/:id" element={<ProductDetail />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </DataProvider>
    </>
  );
}

export default App;
