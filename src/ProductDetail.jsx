import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ addCart, data }) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    data.forEach((i) => {
      // id is a string, i.id is a number;
      if (i.id === +id) setProduct(i);
    });
  }, [data, id, product]);

  const onInputChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  return (
    <div className="details">
      <img src={product.image} className="grid-img" />
      <div>
        <h2 className="grid-title">{product.title}</h2>
        <p className="grid-price">
          <span className="bold">Price: </span>${product.price}
        </p>
      </div>
      <p className="grid-describ">
        <span className="bold">Description: </span>
        {product.description}
      </p>
      <div className="grid-add">
        <div className="input-num">
          <lable htmlFor="quantity">
            <span className="bold">Quantity: </span>
          </lable>
          <input
            id="quantity"
            value={quantity}
            onChange={(e) => onInputChange(e)}
            type="number"
            min={1}
          />
        </div>
        <button
          className="btn add-btn"
          onClick={() => addCart(product, quantity)}
        >
          Add to Cart
        </button>
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
