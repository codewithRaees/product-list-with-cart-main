import { useState } from "react";
import "./App.css";
import ItemsCart from "./components/ItemsCart";
import ProductCards from "./components/ProductCards";
import ProductsData from "../data.js";

function App() {
  const [products, setProducts] = useState(ProductsData);
  const [addToCart, setaddToCart] = useState([]);

  console.log(addToCart);
  return (
    <>
      <main className="flex md:flex-row flex-col bg-[#FCF8F5] px-20 py-10">
        <div className="item-Container">
          <h1 className="py-5 font-extrabold text-4xl text-black sty">
            Desserts
          </h1>
          <div className="flex flex-wrap gap-8 card-list">
            <ProductCards
              products={products}
              setaddToCart={setaddToCart}
              addToCart={addToCart}
            />
          </div>
        </div>
        <div className="w-[1000px] cart-container">
          <ItemsCart addToCart={addToCart} />
        </div>
      </main>
    </>
  );
}

export default App;
