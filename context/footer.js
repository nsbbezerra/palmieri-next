import React, { createContext, useState, useContext } from "react";

const FooterContext = createContext();

export default function FooterProvider({ children }) {
  const [footerItens, setFooterItens] = useState([]);

  return (
    <FooterContext.Provider value={{ footerItens, setFooterItens }}>
      {children}
    </FooterContext.Provider>
  );
}

export function useFooter() {
  const context = useContext(FooterContext);
  const { footerItens, setFooterItens } = context;
  return { footerItens, setFooterItens };
}
