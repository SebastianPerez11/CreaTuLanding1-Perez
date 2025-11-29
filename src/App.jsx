import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./pages/NotFound";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Catálogo general */}
        <Route
          path="/catalogo"
          element={<ItemListContainer greeting="Todas las Categorías" />}
        />

        {/* Catálogo por categoría */}
        <Route
          path="/catalogo/:categoryId"
          element={<ItemListContainer greeting="Categoría" />}
        />

        {/* Detalle de producto */}
        <Route path="/producto/:id" element={<ItemDetailContainer />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

        <Route path="/cart" element={<Cart />} />

      </Routes>
    </>
  );
}

export default App;
