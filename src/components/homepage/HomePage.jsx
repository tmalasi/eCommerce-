import { PRODUCTS_CONFIG } from "../common/ProductsData";
import ProductCard from "./ProductCard";
import "./styles.css";

const HomePage = () => {
  return (
    <div className={`homepage `}>
      <h1>Welcome to my Store</h1>
      <p className="desc">
        Discover our amazing collection of products that cater to all your
        needs. Whether you're looking for the latest gadgets, fashion items, or
        home essentials, we have something for everyone!
      </p>
      <div className="products-grid">
        {PRODUCTS_CONFIG.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
