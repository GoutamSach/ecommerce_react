import React from "react";
import "./Product.scss";

const Product = ({ data, id }) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img
          src={
            process.env.REACT_APP_STRIPE_DEV_URL +
            data?.Img.data[0].attributes.url
          }
          alt={id}
        />
      </div>
      <div className="prod-details">
        <span className="name">{data?.title}</span>
        <span className="price">&#8377;{data?.price}</span>
      </div>
    </div>
  );
};

export default Product;
