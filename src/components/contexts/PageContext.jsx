import { createContext, useState } from "react";

export const PageContext = createContext({});

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState("home");
  const [destination, setDestination] = useState("moon");
  const [crew, setCrew] = useState("Douglas Hurley");
  const [techs, setTechs] = useState("Launch vehicle");

  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
        destination,
        setDestination,
        crew,
        setCrew,
        techs,
        setTechs,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
