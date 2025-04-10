import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { FiShoppingCart } from "react-icons/fi";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      <h2>Explore Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <h4>{product.title}</h4>
            <p className="price">₹{product.price}</p>
            <button className="add-to-cart">
              <FiShoppingCart /> Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
