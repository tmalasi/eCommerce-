import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import './CartPage.css';
import { useNavigate } from "react-router";

const CartPage = () => {
  const { cart, addToCart, removeFromCart,clearCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice]=useState(0);
  const navigate = useNavigate();

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

  const handleCheckout =()=>{
    navigate('/checkout');
    clearCart();
  }
  return (
    <div className="cart-page">
      <ul className="cart-list">
        {cart.map((product) => (
          <li key={product.id} className="cart-item">
            <img src={product.imageSrc} alt={product.name} className="product-image" />
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p className="product-price">Price: ${product.price * product.quantity}</p>
              <div className="quantity-controls">
                <button onClick={() => handleRemoveFromCart(product)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleAddToCart(product)}>+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="total-price">Total Price of Cart: ${totalPrice.toFixed(2)}</h3>

      <button onClick={
              clearCart
            } >Clear Cart</button>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CartPage;
