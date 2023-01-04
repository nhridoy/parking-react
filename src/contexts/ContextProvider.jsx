import { createContext, useContext, useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/localStorages";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const getFromLocalStore = () => {
    return getFromLocalStorage();
  };
  const getData = getFromLocalStorage();
  return (
    <StateContext.Provider value={{ getFromLocalStore, getData }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
