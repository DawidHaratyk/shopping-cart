import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterAndProducts from "./components/FilterAndProducts/FilterAndProducts";
import UserCart from "./components/UserCart/UserCart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FilterAndProducts />} />
          <Route path="/cart" element={<UserCart />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
