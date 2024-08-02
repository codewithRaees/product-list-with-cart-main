import React from "react";
import { LuTrees } from "react-icons/lu";

function BlankCart() {
  return (
    <>
      <div className="bg-white px-5 py-5 rounded-md itemcart">
        <h1 className="py-5 font-bold text-[#C22E08] text-2xl">
          Your Cart (0){" "}
        </h1>
        <div className="flex flex-col justify-center items-center order-Detail">
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt=""
            className="py-3"
          />
          <span>Your added items will appear here.</span>
        </div>
      </div>
    </>
  );
}

export default BlankCart;
