import { ACTIONS } from '../context/actions';

export const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('user'),
  error: null,
  plants: [],
  currentPlant: null,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  users: [],
  reviews: [],
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case ACTIONS.GOOGLE_LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTIONS.RESET_ERROR:
      return {
        ...state,
        error: null,
      };
    case ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        cart: [],
        wishlist: [],
      };
    case ACTIONS.SET_PLANTS:
      return { ...state, plants: action.payload };
    case ACTIONS.SET_CURRENT_PLANT:
      return { ...state, currentPlant: action.payload };

    case ACTIONS.ADD_TO_CART:
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case ACTIONS.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };

    case ACTIONS.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case ACTIONS.ADD_TO_WISHLIST:
      if (state.wishlist.some((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case ACTIONS.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };
    case ACTIONS.DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter((plant) => plant.id !== action.payload),
      };
    case ACTIONS.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ACTIONS.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload),
      };
    default:
      return state;
  }
};
