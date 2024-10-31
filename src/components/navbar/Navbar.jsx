import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import './Navbar.css';
import { useNavigate } from "react-router";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
    
    return (
        <div>
            <nav className={`navbar ${theme}`}>
                <div className="navbar-logo">TurbulentForce</div>
                
                <ul>
                    <li><a onClick={() => navigate('/')}>Home</a></li>
                    <li><a onClick={() => navigate('/cart')}>Cart</a></li>
                </ul>
                <button className="nav-button "onClick={toggleTheme}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
