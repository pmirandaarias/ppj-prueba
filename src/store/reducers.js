import { initialState}  from "./store";
import { CartActions } from "../actions/types";

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActions.ADD_ITEM:
      const addedItem1 = state.items.find(item => item.tail === action.tail)
      let existed_item = state.addedItems.find(item => action.tail === item.tail)
      if (existed_item) {
        addedItem1.quantity += 1
        return {
          ...state,
          total: state.total + action.price,
          cartQuantity: state.cartQuantity + 1
        }
      } else {
        addedItem1.quantity = 1;
        let newTotal = state.total + action.price

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem1],
          total: newTotal,
          cartQuantity: state.cartQuantity + 1
        }
      }

    // Cuando quito un elemento completo del Cart
    case CartActions.REMOVE_ITEM:
      let itemToRemove = state.addedItems.find(item => action.id === item.tail)
      let new_items = state.addedItems.filter(item => action.id !== item.tail)
      let newTotal2 = state.total - (action.price * itemToRemove.quantity)
      return {
        ...state,
        addedItems: new_items,
        total: newTotal2,
        cartQuantity: state.cartQuantity - itemToRemove.quantity
      }

    // para agregar elementos desde el Cart con las flechas
    case CartActions.ADD_QUANTITY:
      let addedItem3 = state.items.find(item => item.tail === action.id);
      addedItem3.quantity += 1
      let newTotal = state.total + action.price
      return {
        ...state,
        total: newTotal,
        cartQuantity: state.cartQuantity + 1
      }

    // para quitar elementos desde el Cart con las flechas
    case CartActions.SUB_QUANTITY:
      let addedItem = state.items.find(item => item.tail === action.id)
      if (addedItem.quantity === 1) {
        let new_items = state.addedItems.filter(item => item.tail !== action.id)
        let newTotal = state.total - action.price
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
          cartQuantity: state.cartQuantity - 1
        }
      } else {
        addedItem.quantity -= 1
        let newTotal = state.total - action.price
        return {
          ...state,
          total: newTotal,
          cartQuantity: state.cartQuantity - 1
        }
      }

    // Para llenar el store desde Amiibo
    case CartActions.SET_ITEMS:
      return {
        ...state,
        items: action.items
      }

    default:
      return state;
  }
};

export default cartReducer;
