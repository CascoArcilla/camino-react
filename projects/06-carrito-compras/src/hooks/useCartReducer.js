import { useReducer } from "react";
import { ACTION_STATE } from "../reducers/cart";
import { cartInitialState, reducer } from "../reducers/cart";

export function useCartReducer() {
  const [state, dispatch] = useReducer(reducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: ACTION_STATE.ADD_TO_CART,
      payLoand: product,
    });

  const removeFromCar = (product) =>
    dispatch({
      type: ACTION_STATE.REMOVE_TO_CART,
      payLoand: product,
    });

  const decreaseQuantity = (product) =>
    dispatch({
      type: ACTION_STATE.DECREASE_QUANTITY,
      payLoand: product,
    });

  const clearCart = () =>
    dispatch({
      type: ACTION_STATE.CLEAR_CART,
    });

  return { addToCart, removeFromCar, decreaseQuantity, clearCart, state };
}
