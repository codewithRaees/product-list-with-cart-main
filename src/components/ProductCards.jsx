import React, { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import ProductData from "../../data.json";

function ProductCards() {
  const [product, setProduct] = useState(ProductData);

  ProductData.map((product) => {
    console.log(Object.values(product.image)[3]);
  });
  return (
    <>
      {ProductData.map((singleProduct) => (
        <div className="card">
          <img
            className="rounded-md h-52"
            src={Object.values(singleProduct.image)[3]}
            alt="Product Image"
          />
          <div className="relative py-8 product-text">
            <p className="text-gray-600">{singleProduct.category}</p>
            <h1 className="font-semibold text-black text-xl">
              {singleProduct.name}
            </h1>
            <p className="font-bold text-[#C22E08]">${singleProduct.price}</p>
            <div className="-top-5 left-8 absolute btn-cart">
              <div className="flex items-center border-color-[#AEA5A3] bg-[#FCFFFF] px-5 py-2 border rounded-full">
                <MdOutlineAddShoppingCart className="text-red-500 text-xl" />
                <span className="ml-3">Add to Cart</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCards;
