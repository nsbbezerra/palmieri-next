import React, { createContext, useState, useContext } from "react";

const HeaderContext = createContext();

export default function HeaderProvider({ children }) {
  const [headerItens, setHeaderItens] = useState([]);

  return (
    <HeaderContext.Provider value={{ headerItens, setHeaderItens }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  const { headerItens, setHeaderItens } = context;
  return { headerItens, setHeaderItens };
}
