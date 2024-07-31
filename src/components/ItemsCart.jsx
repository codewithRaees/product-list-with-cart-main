import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

function ItemsCart() {
  return (
    <>
      <div className="bg-white px-5 py-5 rounded-md itemcart">
        <h1 className="py-5 font-bold text-[#C22E08] text-2xl">
          Your Cart (7){" "}
        </h1>
        <div className="order-Detail pb-4">
          <h1 className="text-[#0D0805]">Classic Tiramisu</h1>
          <div className="relative py-2 price-detail">
            <ul className="flex text-sm">
              <li className="px-3 text-[#C22E08]">1x</li>
              <li className="px-3 text-[#9D938F]">@ $5.50</li>
              <li className="px-3 text-[#9D938F]">$ 5.50</li>
            </ul>
            <div className="-top-3 right-5 absolute close-icon">
              <IoMdCloseCircleOutline className="text-[#9D938F] text-3xl" />
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="order-Detail pb-4">
          <h1 className="text-[#0D0805]">Classic Tiramisu</h1>
          <div className="relative py-2 price-detail">
            <ul className="flex text-sm">
              <li className="px-3 text-[#C22E08]">1x</li>
              <li className="px-3 text-[#9D938F]">@ $5.50</li>
              <li className="px-3 text-[#9D938F]">$ 5.50</li>
            </ul>
            <div className="-top-3 right-5 absolute close-icon">
              <IoMdCloseCircleOutline className="text-[#9D938F] text-3xl" />
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="order-Detail pb-4">
          <h1 className="text-[#0D0805]">Classic Tiramisu</h1>
          <div className="relative py-2 price-detail">
            <ul className="flex text-sm">
              <li className="px-3 text-[#C22E08]">1x</li>
              <li className="px-3 text-[#9D938F]">@ $5.50</li>
              <li className="px-3 text-[#9D938F]">$ 5.50</li>
            </ul>
            <div className="-top-3 right-5 absolute close-icon">
              <IoMdCloseCircleOutline className="text-[#9D938F] text-3xl" />
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="order-Detail pb-4">
          <h1 className="text-[#0D0805]">Classic Tiramisu</h1>
          <div className="relative py-2 price-detail">
            <ul className="flex text-sm">
              <li className="px-3 text-[#C22E08]">1x</li>
              <li className="px-3 text-[#9D938F]">@ $5.50</li>
              <li className="px-3 text-[#9D938F]">$ 5.50</li>
            </ul>
            <div className="-top-3 right-5 absolute close-icon">
              <IoMdCloseCircleOutline className="text-[#9D938F] text-3xl" />
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="flex justify-between order-total px-5 py-5">
          <span>Order Total</span>
          <span>$46.50</span>
        </div>
        <div className="bg-[#FCF8F5] mb-7 px-5 py-5 rounded-md go-green-text">
          <span>This is a carbon neutral delivery</span>
        </div>
        <div className="flex justify-center items-center bg-[#C22E08] px-5 py-4 rounded-full text-white btn-submit">
          Confirm Order
        </div>
      </div>
    </>
  );
}

export default ItemsCart;
