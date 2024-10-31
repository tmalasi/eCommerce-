import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [price, setPrice]= useState();
  const [totalPrice, setTotalPrice]=useState(0);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product, 1);
  };

  useEffect(() => {
    let total = 0; 
    cart.forEach((product) => {
      total += product.price * product.quantity; 
    });
    setTotalPrice(total); 
  }, [cart]);

  return (
    <div>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <p>
              {product.name} - <strong>Price: ${product.price * product.quantity}</strong>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px"}}>
              <button onClick={() => handleRemoveFromCart(product)}>-</button>
              <span style={{ border:"1px solid black", padding:"7px"}}>{product.quantity}</span>
              <button onClick={() => handleAddToCart(product)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total Price of Cart: ${totalPrice}</h3>
    </div>
  );

};

export default CartPage;
