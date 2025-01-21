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




import { createContext, useReducer } from 'react';
import axios from 'axios';

// Define action types
const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_ERROR: 'SET_ERROR',
  RESET_ERROR: 'RESET_ERROR',
  LOGOUT: 'LOGOUT',
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
    default:
      return state;
  }
};

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export const context = createContext();

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

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

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
  };

  return (
    <context.Provider value={{ state, dispatch, login, signup, logout }}>
      {children}
    </context.Provider>
  );
};

export default AppContext;
