import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ heading }) => {
  return (
    <>
      <div className="products-container">
        <div className="sec-heading">{heading}</div>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
};

export default Products;
