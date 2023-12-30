import { useContext, useEffect } from "react";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import "./Home.scss";
import { dataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setproducts } =
    useContext(Context);
  useEffect(() => {
    getCategories();
    getproducts();
  }, []);

  function getCategories() {
    dataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
  }

  function getproducts() {
    dataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setproducts(res);
    });
  }
  return (
    <>
      <Banner />
      <Category categories={categories} />
      <Products products={products} heading="Popular Products" />
    </>
  );
};

export default Home;
