import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const { cart, updateCart } = useContext(CartContext);
  const navigate = useNavigate();

  const cartItem = cart.find((item) => item.id === product.id);
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cart, cartItem]);

  const handleUpdateCart = () => {
    updateCart(product, quantity);
    setQuantity(0);
  };

   return (
    <div className="product-card">
      <div onClick={() => navigate(`/details/${product.id}`)}>
        <img src={product.imageSrc} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
      <div>
        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity === 0} // Disable if quantity is 0
        >
          -
        </button>
        <span
          style={{
            border: "1px solid black",
            padding: "7px",
            color: cartItem ? "green" : "black", // Green if product is in cart
            fontWeight: "bolder"
          }}
        >
          {quantity}
        </span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button onClick={handleUpdateCart}>{cartItem ? "Update Cart" : "Add to Cart"}</button>
    </div>
  );
};

export default ProductCard;
