import React, { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function ProductCards({ products, setCart, cart }) {
  // Function to handle adding products to the cart
  const handleProductSelect = (product) => {
    setCart((prevCart) => {
      // Find if the product already exists in the cart
      const productInCart = prevCart.find((item) => item.id === product.id);

      if (productInCart) {
        // If product exists, update its quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product doesn't exist, add it to the cart with initial quantity of 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);

      if (productInCart.quantity > 1) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== product.id);
      }
    });
  };
  return (
    <>
      {products.map((singleProduct, i) => {
        const productInCart = cart.find((item) => item.id === singleProduct.id);

        return (
          <div className="card" key={i}>
            <img
              className="rounded-md min-w-[220px] h-52"
              src={Object.values(singleProduct.image)[3]}
              alt="Product Image"
            />
            <div className="relative pt-8 product-text">
              <p className="text-gray-600">{singleProduct.category}</p>
              <h1 className="font-semibold text-black text-xl">
                {singleProduct.name}
              </h1>
              <p className="font-bold text-[#C22E08]">${singleProduct.price}</p>
              <div className="-top-5 left-7 absolute min-w-40 cursor-pointer btn-cart">
                {productInCart ? (
                  <div
                    key={i}
                    className="flex justify-around items-center border-color-[#AEA5A3] bg-[#C22E08] py-2 rounded-full"
                  >
                    <CiCircleMinus
                      className="text-2xl text-white"
                      onClick={() => handleRemoveFromCart(singleProduct)}
                    />
                    <span className="ml-3 text-white">
                      {productInCart.quantity}
                    </span>
                    <CiCirclePlus
                      className="ml-4 text-2xl text-white"
                      onClick={() => handleProductSelect(singleProduct)}
                    />
                  </div>
                ) : (
                  <div
                    key={i}
                    onClick={() => {
                      handleProductSelect(singleProduct);
                    }}
                    className="flex items-center border-color-[#AEA5A3] bg-[#FCFFFF] px-5 py-2 border rounded-full"
                  >
                    <MdOutlineAddShoppingCart className="text-red-500 text-xl" />
                    <span className="ml-3">Add to Cart</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCards;
