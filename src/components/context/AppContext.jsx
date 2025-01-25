// import { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const context = createContext();

// const AppContext = ({ children }) => {
//   const [allPlants, setAllPlants] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/plants')
//       .then((response) => {
//         setAllPlants(response.data);
//         console.log(allPlants);
//       })
//       .catch((error) => {
//         console.error('Error fetching plants:', error);
//       });
//   }, []);

//   return <context.Provider value={{ allPlants, setAllPlants }}>{children}</context.Provider>;
// };

// export default AppContext;

// import { createContext, useReducer } from 'react';
// import axios from 'axios';

// // Define action types
// const ACTIONS = {
//   SET_USER: 'SET_USER',
//   SET_ERROR: 'SET_ERROR',
//   RESET_ERROR: 'RESET_ERROR',
//   LOGOUT: 'LOGOUT',
// };

// // Reducer function
// const authReducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.SET_USER:
//       return {
//         ...state,
//         user: action.payload,
//         isAuthenticated: true,
//         error: null,
//       };
//     case ACTIONS.SET_ERROR:
//       return {
//         ...state,
//         error: action.payload,
//       };
//     case ACTIONS.RESET_ERROR:
//       return {
//         ...state,
//         error: null,
//       };
//     case ACTIONS.LOGOUT:
//       return {
//         ...state,
//         user: null,
//         isAuthenticated: false,
//       };
//     default:
//       return state;
//   }
// };

// // Initial state
// const initialState = {
//   user: null,
//   isAuthenticated: false,
//   error: null,
// };

// export const context = createContext();

// const AppContext = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   // Login function with axios call
//   const login = async (email, password) => {
//     try {
//       const response = await axios.get('http://localhost:3000/users');
//       const users = response.data;

//       // Find user with matching email and password
//       const user = users.find((u) => u.email === email && u.password === password);

//       if (user) {
//         dispatch({ type: ACTIONS.SET_USER, payload: user });
//       } else {
//         dispatch({ type: ACTIONS.SET_ERROR, payload: 'Invalid email or password' });
//       }
//     } catch (error) {
//       dispatch({ type: ACTIONS.SET_ERROR, payload: 'An error occurred while logging in' });
//     }
//   };

//   const logout = () => {
//     dispatch({ type: ACTIONS.LOGOUT });
//   };

//   return (
//     <context.Provider value={{ state, dispatch, login, logout }}>
//       {children}
//     </context.Provider>
//   );
// };

// export default AppContext;

// ================ working ================
import { createContext, useReducer } from 'react';
import axios from 'axios';

// Define action types
const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_ERROR: 'SET_ERROR',
  RESET_ERROR: 'RESET_ERROR',
  LOGOUT: 'LOGOUT',
  SET_PLANTS: 'SET_PLANTS',
  SET_CURRENT_PLANT: 'SET_CURRENT_PLANT',

  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_QUANTITY: 'UPDATE_CART_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
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

    default:
      return state;
  }
};

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  plants: [],
  currentPlant: null,
  cart: [],
};

export const context = createContext();

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const fetchPlants = async () => {
    try {
      const response = await axios.get('http://localhost:3000/plants');
      dispatch({ type: ACTIONS.SET_PLANTS, payload: response.data });
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: 'Error fetching plants' });
    }
  };

  const setCurrentPlant = (id) => {
    const plant = state.plants.find((p) => p.id === parseInt(id));
    dispatch({ type: ACTIONS.SET_CURRENT_PLANT, payload: plant });
  };

  // Login function with axios call
  const login = async (email, password) => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      const users = response.data;

      // Find user with matching email and password
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

  // Signup function with axios call
  const signup = async (email, username, contact, password) => {
    try {
      // Sending user data to the API to register the user
      const response = await axios.post('http://localhost:3000/users', {
        email,
        username,
        contact,
        password,
      });

      if (response.data) {
        // If user is successfully created, we set the user in the context
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

  // Calculate cart total
  const cartTotal = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
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
      }}
    >
      {children}
    </context.Provider>
  );
};

export default AppContext;
// ================ working ================

// import { createContext, useReducer, useContext } from 'react';
// import axios from 'axios';

// // Action types
// const ACTIONS = {
//   SET_PLANTS: 'SET_PLANTS',
//   SET_FILTERED_PLANTS: 'SET_FILTERED_PLANTS',
//   SET_PRICE_RANGE: 'SET_PRICE_RANGE',
//   SET_AVAILABILITY: 'SET_AVAILABILITY',
//   SET_RATING: 'SET_RATING',
//   SET_CATEGORIES: 'SET_CATEGORIES',
//   SET_PAGE: 'SET_PAGE',
// };

// // Initial state
// const initialState = {
//   plants: [],
//   filteredPlants: [],
//   priceRange: { min: 0, max: 600 },
//   availability: { inStock: false, preOrder: false, outOfStock: false },
//   rating: 0,
//   categories: [],
//   currentPage: 1,
// };

// // Reducer function
// const plantReducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.SET_PLANTS:
//       return { ...state, plants: action.payload, filteredPlants: action.payload };
//     case ACTIONS.SET_FILTERED_PLANTS:
//       return { ...state, filteredPlants: action.payload };
//     case ACTIONS.SET_PRICE_RANGE:
//       return { ...state, priceRange: action.payload };
//     case ACTIONS.SET_AVAILABILITY:
//       return { ...state, availability: action.payload };
//     case ACTIONS.SET_RATING:
//       return { ...state, rating: action.payload };
//     case ACTIONS.SET_CATEGORIES:
//       return { ...state, categories: action.payload };
//     case ACTIONS.SET_PAGE:
//       return { ...state, currentPage: action.payload };
//     default:
//       return state;
//   }
// };

// // Create context
// export const AppContext = createContext();

// // Context Provider component
// const AppContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(plantReducer, initialState);

//   // Fetch plants data
//   const fetchPlants = async (retries = 3) => {
//     try {
//       const response = await axios.get('http://localhost:3000/plants');
//       return response.data; // Return the plants data
//     } catch (error) {
//       if (error.response && error.response.status === 429 && retries > 0) {
//         console.log("Rate limit hit. Retrying in 1 second...");
//         await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
//         return fetchPlants(retries - 1); // Retry the request
//       } else {
//         console.error('Error fetching plants:', error);
//         throw error; // If retries are exhausted, throw the error
//       }
//     }
//   };

//   // Filter functions
//   const applyFilters = () => {
//     let filtered = [...state.plants];

//     // Filter by availability
//     if (state.availability.inStock) {
//       filtered = filtered.filter((plant) => plant.availability === 'In Stock');
//     }
//     if (state.availability.outOfStock) {
//       filtered = filtered.filter((plant) => plant.availability === 'Out of Stock');
//     }

//     // Filter by price range
//     if (state.priceRange.min && state.priceRange.max) {
//       filtered = filtered.filter(
//         (plant) => plant.price >= state.priceRange.min && plant.price <= state.priceRange.max
//       );
//     }

//     // Filter by rating
//     if (state.rating > 0) {
//       filtered = filtered.filter((plant) => plant.rating >= state.rating);
//     }

//     // Filter by categories
//     if (state.categories.length > 0) {
//       filtered = filtered.filter((plant) =>
//         plant.categories.some((category) => state.categories.includes(category))
//       );
//     }

//     dispatch({ type: ACTIONS.SET_FILTERED_PLANTS, payload: filtered });
//   };

//   // Pagination handler
//   const paginate = (pageNumber) => {
//     dispatch({ type: ACTIONS.SET_PAGE, payload: pageNumber });
//   };

//   // Providing context values
//   return (
//     <AppContext.Provider
//       value={{
//         state,
//         dispatch,
//         fetchPlants,
//         applyFilters,
//         paginate,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppContextProvider;

// // Custom hook to use context
// export const useAppContext = () => useContext(AppContext);
