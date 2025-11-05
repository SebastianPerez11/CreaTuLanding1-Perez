import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ProductsDetail from "./components/ProductsDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/catalogo"
          element={<ItemListContainer greeting={"Nuevos Ingresos"} />}
        ></Route>
        <Route path="/catalogo/:id" element={<ProductsDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
