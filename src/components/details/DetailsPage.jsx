import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { PRODUCTS_CONFIG } from "../common/ProductsData";
import './Details.css'

const DetailsPage = () => {
    const { productId } = useParams();
    const product = PRODUCTS_CONFIG.find((product) => product.id === productId);

    const { cart, updateCart } = useContext(CartContext);
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

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className={`details-page `}>
            <img src={product.imageSrc} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
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

export default DetailsPage;
