export const cartInitialState = JSON.parse(
  window.localStorage.getItem("cart") || "[]"
); // Para usar el useReducer, puede ser lo que sea

export const ACTION_STATE = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_TO_CART: "REMOVE_TO_CART",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
};

const updateLocalStorge = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const reducer = (state, action) => {
  const { type: actionType, payLoand: actionPayLoand } = action;

  switch (actionType) {
    case ACTION_STATE.ADD_TO_CART: {
      const { id } = actionPayLoand;
      // revisar si producto esta en el carrito
      const thereIsProduct = state.findIndex((item) => item.id === id);
      if (thereIsProduct >= 0) {
        const newState = structuredClone(state);
        newState[thereIsProduct].quantity += 1;
        updateLocalStorge(newState);
        return newState;
      }

      // sino esta se añande el producto al carrito
      const newState = [
        ...state,
        {
          ...actionPayLoand,
          quantity: 1,
        },
      ];

      updateLocalStorge(newState);
      return newState;
    }

    case ACTION_STATE.REMOVE_TO_CART: {
      const { id } = actionPayLoand;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorge(newState);
      return newState;
    }

    case ACTION_STATE.DECREASE_QUANTITY: {
      const { id, quantity } = actionPayLoand;
      if (quantity === 1) return state;

      const thereIsProduct = state.findIndex((item) => item.id === id);
      const newState = structuredClone(state);
      newState[thereIsProduct].quantity -= 1;
      updateLocalStorge(newState);
      return newState;
    }

    case ACTION_STATE.CLEAR_CART: {
      updateLocalStorge(cartInitialState);
      return cartInitialState;
    }
  }
};
