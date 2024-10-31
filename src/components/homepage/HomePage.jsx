import { PRODUCTS_CONFIG } from "../common/ProductsData";
import ProductCard from "./ProductCard";
import './styles.css'
import { useContext } from "react";


  const HomePage = () => {
    return (
      <div className={`homepage `}>
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