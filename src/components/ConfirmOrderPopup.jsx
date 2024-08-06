import React from "react";
import { createPortal } from "react-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuTrees } from "react-icons/lu";

const ConfirmOrderPopup = ({ isOpen, setisOpen, cart }) => {
  return createPortal(
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setisOpen(false);
        }}
        className={`z-10 fixed inset-0 overflow-y-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="sm:block flex justify-center items-center px-4 sm:p-0 pb-20 min-h-screen text-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="sm:inline-block hidden sm:align-middle sm:h-screen"></span>
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="inline-block align-bottom bg-white shadow-xl sm:my-8 px-4 sm:p-6 pt-5 pb-4 rounded-lg sm:w-full sm:max-w-lg text-left transform transition-all overflow-hidden sm:align-middle"
          >
            <div className="sm:mx-auto sm:w-full">
              <IoCheckmarkCircleOutline className="w-auto h-12 text-4xl text-green-600" />
              <h2 className="mt-1 font-bold text-xl leading-9 tracking-tight">
                Ordered Confirmed
              </h2>
              <h2 className="mt-1 font-sm text-gray-600">
                We hope you enjoy your food!
              </h2>
            </div>

            <div className="sm:mx-auto mt-2 sm:w-full">
              <div className="bg-white py-1 rounded-md itemcart">
                <div className="bg-[#FCF8F5] item-main py- rounded-md">
                  {cart.map((cartItems) => (
                    <div className="div">
                      <div className="flex items-center gap-3 order-Detail px-2 py-3">
                        <div className="icon">
                          <img
                            className="rounded-md w-16 h-14"
                            src={Object.values(cartItems.image)[3]}
                            alt="Product Image"
                          />
                        </div>
                        <div className="w-96 cart-text">
                          <h1 className="text-[#0D0805]">{cartItems.name}</h1>
                          <div className="relative price-detail">
                            <ul className="flex text-sm">
                              <li className="px-3 text-[#C22E08]">
                                {cartItems.quantity} x
                              </li>
                              <li className="px-3 text-[#9D938F]">
                                @ ${cartItems.price}
                              </li>
                            </ul>
                            <div className="top-0 right-5 absolute">
                              <span className="font-bold text-[#726d6c]">
                                $ {cartItems.quantity * cartItems.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="border-[#eeeeee83] m-auto mx-3 border h-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between order-total px-5 py-3">
                  <span>Order Total</span>
                  <span className="font-bold text-[#726d6c]">
                    ${" "}
                    {cart.reduce(
                      (total, item) => total + item.quantity * item.price,
                      0
                    )}
                  </span>
                </div>

                <div className="flex justify-center items-center bg-[#C22E08] px-5 py-2 rounded-full text-white cursor-pointer btn-submit">
                  Start new Order
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ConfirmOrderPopup;
