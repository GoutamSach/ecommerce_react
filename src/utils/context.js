import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setproducts] = useState();
  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setproducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
