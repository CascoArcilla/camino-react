import { useState } from "react";

export default function CartProduct({
  image,
  name,
  price,
  addToCar,
  decreseCantidad,
  cantidad,
}) {
  return (
    <li>
      <img src={image} alt={name} />
      <div>
        <strong>{name}</strong> - ${price}
      </div>
      <footer>
        <button disabled={cantidad === 1} onClick={decreseCantidad}>
          -
        </button>
        <small>Cant: {cantidad}</small>
        <button onClick={addToCar}>+</button>
      </footer>
    </li>
  );
}
