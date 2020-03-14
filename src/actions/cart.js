import { CartActions } from "./types";

export const addToCart = (tail, price) => ({
  type: CartActions.ADD_ITEM,
  tail,
  price
});

export const removeItemCart = (id, price) => ({
  type: CartActions.REMOVE_ITEM,
  id,
  price
});

export const subtractQuantityCart = (id, price) => ({
  type: CartActions.SUB_QUANTITY,
  id,
  price
});

export const addQuantityCart = (id, price) => ({
  type: CartActions.ADD_QUANTITY,
  id,
  price
});

export const setItemsList = items => ({
  type: CartActions.SET_ITEMS,
  items
});
