import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { PRODUCTS_CONFIG } from "../common/ProductsData";
import { ThemeContext } from "../context/ThemeContext";
import './Details.css'

const DetailsPage = () => {
    const { productId } = useParams();
    const product = PRODUCTS_CONFIG.find((product) => product.id === productId);
    const [quantity, setQuantity] = useState(1);
    const { addToCart, removeFromCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product, quantity);
        setQuantity(1);
    }

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className={`details-page ${theme}`}>
            <img src={product.imageSrc} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
            />
            <button onClick={handleAddToCart}>Add to cart</button>
            <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        </div>
    );
};

export default DetailsPage;
