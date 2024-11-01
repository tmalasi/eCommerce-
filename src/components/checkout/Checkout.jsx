import { useNavigate } from "react-router";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Thank You for Your Order!</h1>
      <p className="checkout-message">
        Your order has been successfully placed. We hope you enjoyed your
        purchase!
      </p>
      <button className="shop-more-button" onClick={() => navigate(`/`)}>
        Shop Some More
      </button>
    </div>
  );
};

export default Checkout;
