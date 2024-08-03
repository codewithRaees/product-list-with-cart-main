import { useState } from "react";
import "./App.css";
import ItemsCart from "./components/ItemsCart";
import ProductCards from "./components/ProductCards";
import ProductsData from "../data.js";
import ProductContainer from "./components/ProductContainer.jsx";

function App() {
  const [products, setProducts] = useState(ProductsData);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState();
  return (
    <>
      <ProductContainer />
      <main className="flex md:flex-row flex-col bg-[#FCF8F5] px-20 py-10">
        <div className="item-Container">
          <h1 className="py-5 font-extrabold text-4xl text-black sty">
            Desserts
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-8 card-list">
            <ProductCards
              products={products}
              setCart={setCart}
              cart={cart}
              setCount={setCount}
            />
          </div>
        </div>
        <div className="items-center min-w-96 cart-container">
          <ItemsCart cart={cart} />
        </div>
      </main>
    </>
  );
}

export default App;
