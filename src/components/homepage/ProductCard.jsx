import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const { getItemQuantity, updateCart } = useContext(CartContext);
  const navigate = useNavigate();

  //to get the quantity of the product if it is on the cart 
  const initialQuantity = getItemQuantity(product.id);
  const [quantity, setQuantity] = useState(initialQuantity);

  //to make sure it is sync everytime quantity changes
  useEffect(() => {
    setQuantity(getItemQuantity(product.id));
  }, [product.id, getItemQuantity]);

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
          disabled={quantity === 0}
        >
          -
        </button>
        <span
          style={{
            padding: "7px",
            color: (initialQuantity && initialQuantity==quantity) ? "green" :  "var(--text-color)",
            fontWeight: "bolder",
          }}
        >
          {quantity}
        </span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button onClick={()=>updateCart(product,quantity)}>
        {initialQuantity ? "Update Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
