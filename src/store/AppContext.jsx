import { createContext, useReducer, useEffect } from 'react';
import { ACTIONS } from './context/actions';
import { authReducer, initialState } from './reducers/reducer';
import { api } from './context/api';

export const context = createContext();

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Add useEffect to sync cart with localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  // Add useEffect to sync user with localStorage
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('user');
    }
  }, [state.user]);

  // Add useEffect for wishlist persistence
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  const fetchPlants = async () => {
    try {
      const response = await api.fetchPlants();
      dispatch({ type: ACTIONS.SET_PLANTS, payload: response.data });
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: 'Error fetching plants' });
    }
  };

  const setCurrentPlant = (id) => {
    const plant = state.plants.find((p) => p.id === parseInt(id));
    dispatch({ type: ACTIONS.SET_CURRENT_PLANT, payload: plant });
  };

  const login = async (email, password) => {
    try {
      const response = await api.getUsers();
      const users = response.data;
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        dispatch({ type: ACTIONS.SET_USER, payload: user });
      } else {
        dispatch({ type: ACTIONS.SET_ERROR, payload: 'Invalid email or password' });
      }
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: 'An error occurred while logging in' });
    }
  };

  const signup = async (email, username, contact, password) => {
    try {
      const response = await api.createUser({ email, username, contact, password });

      if (response.data) {
        dispatch({ type: ACTIONS.SET_USER, payload: response.data });
      } else {
        dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to create account' });
      }
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: 'An error occurred during signup' });
    }
  };

  const addToCart = (plant) => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: plant });
  };

  const removeFromCart = (plantId) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: plantId });
  };

  const updateCartQuantity = (plantId, quantity) => {
    if (quantity < 1) {
      removeFromCart(plantId);
      return;
    }
    dispatch({
      type: ACTIONS.UPDATE_CART_QUANTITY,
      payload: { id: plantId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART });
  };

  const cartTotal = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
  };

  const addToWishlist = (plant) => {
    dispatch({ type: ACTIONS.ADD_TO_WISHLIST, payload: plant });
  };

  const removeFromWishlist = (plantId) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_WISHLIST, payload: plantId });
  };

  const isInWishlist = (plantId) => {
    return state.wishlist.some((item) => item.id === plantId);
  };

  return (
    <context.Provider
      value={{
        state,
        dispatch,
        login,
        signup,
        logout,
        fetchPlants,
        setCurrentPlant,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotal,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default AppContext;
