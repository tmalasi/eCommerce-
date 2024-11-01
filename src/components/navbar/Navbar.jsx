import { ThemeContext } from "../context/ThemeContext";
import { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router";
import { FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { getTotalItems } = useContext(CartContext);
  const totalQuantity = getTotalItems();

  return (
    <div>
      <nav className={`navbar`}>
        <div className="navbar-logo" onClick={() => navigate("/")}>
          TurbulentForce
        </div>
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/cart")}>
          <FaShoppingCart /> {totalQuantity}
        </a>
        <button className="nav-button " onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
