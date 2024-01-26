import { useState } from "react";
import Products from "./components/Products";
import { products as initialProducts } from "./mocks/product.json";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOMENT } from "./config";
import { useFilters } from "./hooks/useFilters";
import Cart from "./components/Cart";
import { CartProvider } from "./context/cart";

export default function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const newProduct = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={newProduct} />
      {IS_DEVELOMENT && <Footer />}
    </CartProvider>
  );
}
