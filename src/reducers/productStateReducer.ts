import { ProductStateType } from "../types";


export const productStateReducer = (state: ProductStateType, { type, payload }:{type: string, payload: any}) => {
  switch (type) {
    case "ADD_PRODUCT_LIST":
      return { ...state, productList: payload };
    case "ADD_CATEGORIES":
      return { ...state, categoriesList: payload };
    case "ADD_CART_WISHLIST":
      return { ...state, cart: payload.cart, wishList: payload.wishlist };
    case "RESET_CART_WISHLIST":
      return { ...state, cart: [], wishList: [] };

    case "ADD_TO_CART":
      return { ...state, cart: [...payload] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: [...payload] };
    case "RESET_CART": {
      const cart = state.cart;
      return { ...state, cart: [], order: payload }
    }
    case "ADD_TO_WISHLIST":
      return { ...state, wishList: [...payload] };
    case "REMOVE_FROM_WISHLIST":
      return { ...state, wishList: [...payload] };
    case 'SET_COUPON_DISCOUNT':
      return { ...state, couponDiscount: payload };
    case "SET_SELECTED_ADDRESS":
      return { ...state, selectedAddress: payload }
    default:
      return { ...state };
  }
};
