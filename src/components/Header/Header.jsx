import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const [showSearch, setshowSearch] = useState(false);

  const navigate = useNavigate();

  // code for scroll effect
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header  ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div onClick={() => navigate("/")} className="center">
            Ecommerce
          </div>
          <div className="right">
            <TbSearch onClick={() => setshowSearch(true)} />
            <AiOutlineHeart />
            <span onClick={() => setshowCart(true)} className="cart-icon">
              <CgShoppingCart /> <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setshowCart={setshowCart} />}
      {showSearch && <Search setshowSearch={setshowSearch} />}
    </>
  );
};

export default Header;
