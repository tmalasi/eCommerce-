import { PRODUCTS_CONFIG } from "../common/ProductsData";
import ProductCard from "./ProductCard";
import './styles.css'
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";


  const HomePage = () => {
    const { theme } = useContext(ThemeContext); 
    return (
      <div className={`homepage ${theme}`}>
        <h1>Welcome to my Store</h1>
        <div className="products-grid">
        {PRODUCTS_CONFIG.map(( product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
      </div>
    );
 }
 export default HomePage;