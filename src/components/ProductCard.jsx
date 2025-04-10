import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.slice(0, 30)}...</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="btn">View</Link>
    </div>
  );
}
