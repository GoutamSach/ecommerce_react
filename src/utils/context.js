import { createContext } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  return <createContext>{children}</createContext>;
};

export default AppContext;
