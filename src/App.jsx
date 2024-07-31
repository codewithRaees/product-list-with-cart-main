import "./App.css";
import ItemsCart from "./components/ItemsCart";
import ProductCards from "./components/ProductCards";

function App() {
  return (
    <>
      <main className="flex flex-row md:flex-col bg-[#FCF8F5] px-20 py-10">
        <div className="item-Container">
          <h1 className="py-5 font-extrabold text-4xl text-black sty">
            Desserts
          </h1>
          <div className="flex flex-wrap gap-8 card-list">
            <ProductCards />
          </div>
        </div>
        <div className="w-[1000px] cart-container">
          <ItemsCart />
        </div>
      </main>
    </>
  );
}

export default App;
