import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Header.css";
import { FiShoppingCart, FiLogOut, FiHome } from "react-icons/fi";

export default function Header({ setToken }) {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo-section" onClick={() => navigate("/product")}>
        <img src="/images/logo.png" alt="ShopEase" className="logo-img" />
        <h2 className="logo-text">ShopEase</h2>
      </div>
      <nav className="nav-links">
        <Link to="/product" className="nav-link">
          <FiHome /> Home
        </Link>
        <Link to="/cart" className="nav-link">
          <FiShoppingCart /> Cart ({cart.length})
        </Link>
        <button onClick={handleLogout} className="logout-button">
          <FiLogOut /> Logout
        </button>
      </nav>
    </header>
  );
}
