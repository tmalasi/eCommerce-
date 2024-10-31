import { Routes as AppRoutes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import DetailsPage from '../details/DetailsPage';
import CartPage from '../cart/CartPage';

const Routes = () => {
    return (
      <AppRoutes>    
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:productId" element={<DetailsPage />} />        
        <Route path="/cart" element={<CartPage />} />
      </AppRoutes>

    );
  };
  
  export default Routes;