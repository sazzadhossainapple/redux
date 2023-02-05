import { ADD_TO_CART, REMOVE_TO_CART } from "../actionTypes/actionType";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (product) => {
  return {
    type: REMOVE_TO_CART,
    payload: product,
  };
};
