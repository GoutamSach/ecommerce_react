import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setproducts] = useState();
  // const [showCart, setShowCart] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartSubTotal, setCartSubTotal] = useState(0);
  // const location = useLocation();

  // useEffect(() => {}, [cartItems]);

  // const handleAddToCart = () => { let items = [...cartItems]; let index= items.};
  // const handleRemoveFromCart = () => {};
  // const handleCartQty = () => {};

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setproducts,
        // showCart,
        // setShowCart,
        // cartItems,
        // setCartItems,
        // cartCount,
        // setCartCount,
        // cartSubTotal,
        // setCartSubTotal,
        // handleAddToCart,
        // handleRemoveFromCart,
        // handleCartQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
