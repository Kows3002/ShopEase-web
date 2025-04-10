import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  console.log(products);

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   if (!storedToken) {
  //     alert("Please login to view this page.");
  //     window.location.href = "/login";
  //   }
  // }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="home-container">
      <h1>All Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
