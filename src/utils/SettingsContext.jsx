import React, { useState, createContext } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = props => {
  const [upperCase, setUpperCase] = useState(localStorage.getItem("upperCase") || true);
  document.documentElement.setAttribute("upperCase", upperCase);

  return (
    <SettingsContext.Provider value={[ upperCase, setUpperCase ]}>
      { props.children }
    </SettingsContext.Provider>
  )
}