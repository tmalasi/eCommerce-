import { Routes as AppRoutes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import DetailsPage from "../details/DetailsPage";
import CartPage from "../cart/CartPage";
import Checkout from "../checkout/Checkout";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:productId" element={<DetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
    </AppRoutes>
  );
};

export default Routes;
