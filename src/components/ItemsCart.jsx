import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuTrees } from "react-icons/lu";
import BlankCart from "./BlankCart";
import ConfirmOrderPopup from "./ConfirmOrderPopup";

function ItemsCart({ cart }) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      {cart.length === 0 ? (
        <BlankCart />
      ) : (
        <div className="bg-white px-5 py-5 rounded-md itemcart">
          <h1 className="py-5 font-bold text-[#C22E08] text-2xl">
            Your Cart ({cart.length}){" "}
          </h1>

          {cart.map((item, index) => {
            return (
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
            );
          })}

          <div className="flex justify-between order-total px-5 py-5">
            <span>Order Total</span>
            <span className="font-bold text-[#726d6c]">
              $
              {cart.reduce(
                (total, item) => total + item.quantity * item.price,
                0
              )}
            </span>
          </div>
          <div className="flex items-center bg-[#FCF8F5] mb-7 px-5 py-5 rounded-md go-green-text">
            <LuTrees className="text-green-400 text-xl" />
            <span className="ml-2">This is a carbon neutral delivery</span>
          </div>
          <div
            onClick={() => setisOpen(true)}
            className="flex justify-center items-center bg-[#C22E08] px-5 py-4 rounded-full text-white cursor-pointer btn-submit"
          >
            Confirm Order
            <ConfirmOrderPopup
              isOpen={isOpen}
              setisOpen={setisOpen}
              cart={cart}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ItemsCart;
