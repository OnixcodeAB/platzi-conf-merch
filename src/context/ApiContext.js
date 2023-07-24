import React, { createContext } from 'react';
import { useGetCountry} from '../hooks/useApi';

const ApiContext = createContext({});

const ApiProvider = ({ children }) => {
  const countries = useGetCountry();
  //const states = useGetState();
  //console.log(states);
  return (
    <ApiContext.Provider value={{ countries }}>{children}</ApiContext.Provider>
  );
};

export { ApiProvider, ApiContext };
