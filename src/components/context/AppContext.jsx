import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const context = createContext();

const AppContext = ({ children }) => {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/plants')
      .then((response) => {
        setAllPlants(response.data);
        console.log(allPlants);
      })
      .catch((error) => {
        console.error('Error fetching plants:', error);
      });
  }, []);

  return <context.Provider value={{ allPlants, setAllPlants }}>{children}</context.Provider>;
};

export default AppContext;
