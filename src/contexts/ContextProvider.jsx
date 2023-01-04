import { createContext, useContext, useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/localStorages";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [getAllVehicles, setGetAllVehicles] = useState(getFromLocalStorage());
  const getFromLocalStore = () => {
    setGetAllVehicles(getFromLocalStorage());
  };

  return (
    <StateContext.Provider
      value={{ getFromLocalStore, getAllVehicles, setGetAllVehicles }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
