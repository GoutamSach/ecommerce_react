import { useParams } from "react-router-dom";
import Product from "../Products/Product/Product";
import "./Category.scss";
import { useContext, useEffect } from "react";
import { Context } from "../../utils/context";
import { dataFromApi } from "../../utils/api";
import Products from "../Products/Products";

const Category = () => {
  const { id } = useParams();
  const { products, setproducts } = useContext(Context);

  useEffect(() => {
    getproducts();
  }, []);

  function getproducts() {
    dataFromApi(
      `/api/products?populate=*&[filters][categories][id]=${id}`
    ).then((res) => {
      console.log(res);
      setproducts(res);
    });
  }

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Products</div>
        <Products products={products} />
      </div>
    </div>
  );
};

export default Category;
