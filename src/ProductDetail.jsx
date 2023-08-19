import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  return (
    <div>
      <Link to="/">
        <p>{"<-----"}Back to homepage</p>
      </Link>
      <div>
        <img src={product.image} />
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
/**
 * category: "men's clothing"
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"

id: 1

image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

price: 109.95

rating: Object { rate: 3.9, count: 120 }

title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
 * 
 */
