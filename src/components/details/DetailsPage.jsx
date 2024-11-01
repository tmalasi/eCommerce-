import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { PRODUCTS_CONFIG } from "../common/ProductsData";
import "./Details.css";

const DetailsPage = () => {
  const { productId } = useParams();
  const product = PRODUCTS_CONFIG.find((product) => product.id === productId);
  const { updateCart, getItemQuantity } = useContext(CartContext);

  const initialQuantity = getItemQuantity(productId);
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(getItemQuantity(productId));
  }, [productId, getItemQuantity]);


  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="details-page">
      <img src={product.imageSrc} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        <button
          onClick={() => setQuantity(Math.max(quantity - 1, 0))}
          disabled={quantity === 0} 
        >
          -
        </button>
        <span
          style={{
            border: "1px solid black",
            padding: "7px",
            color: (initialQuantity && initialQuantity==quantity)  ? "green" :  "var(--text-color)",
            fontWeight: "bolder",
          }}
        >
          {quantity}
        </span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button onClick={() =>updateCart(product,quantity)}>
        {initialQuantity ? "Update Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default DetailsPage;
