import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";

export default function Products({ products }) {
  const { addToCart, cart, removeFromCar } = useCart();

  const checkProductInCar = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCar = checkProductInCar(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: isProductInCar ? "red" : "#09f",
                  }}
                  onClick={() =>
                    isProductInCar ? removeFromCar(product) : addToCart(product)
                  }
                >
                  {isProductInCar ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
