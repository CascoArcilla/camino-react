import "./Cart.css";
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import CartProduct from "./CartProduct";

export default function Cart() {
  const idChecBox = useId();
  const { clearCart, cart, addToCart, decreaseQuantity } = useCart();
  const isEmtyCart = cart.length === 0;

  return (
    <>
      <label className="cart-button" htmlFor={idChecBox}>
        <CartIcon />
      </label>
      <input type="checkbox" id={idChecBox} hidden />

      <aside className="cart">
        <ul>
          {isEmtyCart ? (
            <li
              style={{
                fontSize: "18px",
                fontWeight: "bolder",
              }}
            >
              Añade articulos al carrito
            </li>
          ) : (
            cart.map((product) => {
              return (
                <CartProduct
                  key={product.id}
                  image={product.thumbnail}
                  name={product.title}
                  price={product.price}
                  addToCar={() => addToCart(product)}
                  decreseCantidad={() => decreaseQuantity(product)}
                  cantidad={product.quantity}
                />
              );
            })
          )}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
