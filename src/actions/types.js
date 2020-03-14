// Cada action le pondremos el prefijo CART_ para visualizarlo más cómodo en el Redux DevTools, si es que llego
// a ocuparlo... (pero por costumbre)

export const CartActions = {
  ADD_ITEM: 'CART_ADD_ITEM',
  REMOVE_ITEM: 'CART_REMOVE_ITEM',
  ADD_QUANTITY: 'CART_ADD_QUANTITY',
  SUB_QUANTITY: 'CART_SUB_QUANTITY',
  SET_ITEMS: 'LIST_SET_ITEMS',
};
