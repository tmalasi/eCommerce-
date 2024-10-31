import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product, quantity);
    setQuantity(1);
  };
  return (
    <div className="product-card">
      <div onClick={() => navigate(`/details/${product.id}`)}>
        <img src={product.imageSrc} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p> </div>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
     
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
};

export default ProductCard;
