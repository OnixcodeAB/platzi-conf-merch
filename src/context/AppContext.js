import React, { createContext } from 'react';
import { useInitialState } from '../hooks/useInitialState';
import { useCalc } from '../constant/useCalc';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const initialState = useInitialState();
  const Calc = useCalc();
  return (
    <AppContext.Provider value={{initialState, Calc}}>
      {/* Definir los valores del contexto */}

      {/* End */}
      {children}
    </AppContext.Provider>
  );
};

export {AppProvider,AppContext };
