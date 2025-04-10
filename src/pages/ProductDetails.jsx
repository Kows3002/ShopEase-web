import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ReactStars from "react-stars";
import "./ProductDetails.css";

export default function FullProductDetails() {
    const { cart, updateQuantity, addToCart ,removeFromCart, clearCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const handleAddToCart = () => {
    addToCart(product);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-container">
      <div className="product-info">
        {/* Product Image Gallery */}
        <div className="product-images">
          <img
            src={product.image}
            alt={product.title}
            className="product-main-image"
          />
        </div>

        {/* Product Information */}
        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-description">
            {product.description || "Detailed description not available"}
          </p>

          {/* Add to Cart & Buy Now Buttons */}
          <div className="product-actions">
            <button onClick={() => handleAddToCart()} className="add-to-cart-btn">Add to Cart</button>
          </div>

          {/* Product Reviews */}
          <div className="product-reviews">
            <h2 className="reviews-title">Customer Reviews</h2>
            <div className="reviews-list">
              <div className="review-card">
                <p className="review-text">"Excellent product!"</p>
                <div className="review-rating">
                  <ReactStars count={5} value={5} size={24} edit={false} color2={"#ffd700"} />
                </div>
              </div>

              <div className="review-card">
                <p className="review-text">"Good quality, but a bit expensive."</p>
                <div className="review-rating">
                  <ReactStars count={5} value={4} size={24} edit={false} color2={"#ffd700"} />
                </div>
              </div>

              <div className="review-card">
                <p className="review-text">"Worth every penny!"</p>
                <div className="review-rating">
                  <ReactStars count={5} value={5} size={24} edit={false} color2={"#ffd700"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
