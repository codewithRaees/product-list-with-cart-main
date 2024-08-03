import React, { useState } from "react";

const ProductContainer = () => {
  // Initialize products and cart states
  const [products] = useState([
    { id: 1, name: "Product 1", description: "Description 1", price: 10 },
    { id: 2, name: "Product 2", description: "Description 2", price: 20 },
    { id: 3, name: "Product 3", description: "Description 3", price: 30 },
  ]);
  const [cart, setCart] = useState([]);

  // Function to handle adding products to the cart
  const handleAddToCart = (product) => {
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
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => {
          const productInCart = cart.find((item) => item.id === product.id);

          return (
            <li key={product.id}>
              {product.name} - ${product.price}
              {productInCart ? (
                <div>
                  <button onClick={() => handleRemoveFromCart(product)}>
                    -
                  </button>
                  {productInCart.quantity}
                  <button onClick={() => handleAddToCart(product)}>+</button>
                </div>
              ) : (
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              )}
            </li>
          );
        })}
      </ul>

      <h1>Cart</h1>
      <p>
        Total items in cart:{" "}
        {cart.reduce((total, item) => total + item.quantity, 0)}
      </p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductContainer;
