import Category from "../Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <Products />
    </>
  );
};

export default Home;
