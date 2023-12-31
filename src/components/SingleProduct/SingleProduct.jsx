import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { dataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const { id } = useParams();
  const { products, setproducts } = useContext(Context);
  const [qty, setQty] = useState(1);

  const increment = () => {
    setQty((prevState) => prevState + 1);
  };
  const decrement = () => {
    setQty((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  useEffect(() => {
    getproducts();
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);

  async function getproducts() {
    await dataFromApi(`/api/products?populate=*&[filters][id]=${id}`).then(
      (res) => {
        console.log(res);
        setproducts(res);
      }
    );
  }

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_STRIPE_DEV_URL +
                products?.data[0]?.attributes?.Img.data[0].attributes.url
              }
            />
          </div>
          <div className="right">
            <span className="name">{products?.data[0]?.attributes?.title}</span>
            <span className="price">
              &#8377;{products?.data[0]?.attributes?.price}
            </span>
            <span className="desc">
              {products?.data[0]?.attributes?.description}
            </span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{qty}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              {/* <span className="text-bold">
                Category:
                <span>####</span>
              </span> */}
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* <RelatedProducts
          productId={id}
          catId={products?.data[0]?.attributes?.categories.data[0].id}
        /> */}
      </div>
    </div>
  );
};

export default SingleProduct;
