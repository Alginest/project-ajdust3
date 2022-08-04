import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const openToggle = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <AppContext.Provider value={{ openMenu, openToggle, setOpenMenu }}>
      {children}
    </AppContext.Provider>
  );
};
// global Context hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
