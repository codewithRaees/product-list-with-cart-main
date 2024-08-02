import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuTrees } from "react-icons/lu";
import BlankCart from "./BlankCart";

function ItemsCart({ cart }) {
  return (
    <>
      {cart.length === 0 ? (
        <BlankCart />
      ) : (
        <div className="bg-white px-5 py-5 rounded-md itemcart">
          <h1 className="py-5 font-bold text-[#C22E08] text-2xl">
            Your Cart ({cart.length}){" "}
          </h1>

          {cart.map((item, index) => (
            <div className="order-Detail pb-4" key={index}>
              <h1 className="text-[#0D0805]">{item.name}</h1>
              <div className="relative py-2 price-detail">
                <ul className="flex text-sm">
                  <li className="px-3 text-[#C22E08]">{item.quantity} x</li>
                  <li className="px-3 text-[#9D938F]">@ ${item.price}</li>
                  <li className="px-3 font-bold text-[#726d6c]">
                    $ {item.quantity * item.price}
                  </li>
                </ul>
                <div className="-top-3 right-5 absolute close-icon">
                  <IoMdCloseCircleOutline className="text-[#9D938F] text-2xl" />
                </div>
              </div>
              <hr></hr>
            </div>
          ))}

          <div className="flex justify-between order-total px-5 py-5">
            <span>Order Total</span>
            <span className="font-bold text-[#726d6c]">$46.50</span>
          </div>
          <div className="flex items-center bg-[#FCF8F5] mb-7 px-5 py-5 rounded-md go-green-text">
            <LuTrees className="text-green-400 text-xl" />
            <span className="ml-2">This is a carbon neutral delivery</span>
          </div>
          <div className="flex justify-center items-center bg-[#C22E08] px-5 py-4 rounded-full text-white btn-submit">
            Confirm Order
          </div>
        </div>
      )}
    </>
  );
}

export default ItemsCart;
