import { Route, Routes } from "react-router-dom";
import FilterAndProducts from "./components/FilterAndProducts/FilterAndProducts";
import UserCart from "./components/UserCart/UserCart";
import { ProductProvider } from "./components/ProductsContext/ProductsContext";

const App = () => {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<FilterAndProducts />} />
        <Route path="/cart" element={<UserCart />} />
      </Routes>
    </ProductProvider>
  );
};

export default App;
