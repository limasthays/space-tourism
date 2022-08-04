import { createContext, useState } from "react";

export const PageContext = createContext({});

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState("home");
  const [destination, setDestination] = useState("moon");
  const [crew, setCrew] = useState("douglas");

  return (
    <PageContext.Provider
      value={{ page, setPage, destination, setDestination, crew, setCrew }}
    >
      {children}
    </PageContext.Provider>
  );
};
