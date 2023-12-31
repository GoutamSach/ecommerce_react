// import React, { useContext, useEffect, useState } from "react";
// import Products from "../../Products/Products";

// import { dataFromApi } from "../../../utils/api";
// import { Context } from "../../../utils/context";
// const RelatedProducts = ({ catId, productId }) => {
//   const { relatedproducts, setrelatedproducts } = useContext(Context);

//   useEffect(() => {
//     getproducts();
//   }, []);

//   async function getproducts() {
//     await dataFromApi(
//       `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${catId}&pagination[start]=0&pagination[limit]=4`
//     ).then((res) => {
//       console.log(res);
//       setrelatedproducts(res);
//     });
//   }

//   return (
//     <div className="related-products">
//       {catId}
//       <Products products={relatedproducts} heading="Related Products" />
//     </div>
//   );
// };

// export default RelatedProducts;
