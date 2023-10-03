import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ addCart, data }) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    data?.forEach((i) => {
      // id is a string, i.id is a number;
      if (i.id === +id) setProduct(i);
    });
  }, [data, id, product]);

  const onInputChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  return (
    <div data-testid="details" className="details">
      <img src={product.image} className="grid-img" />
      <div>
        <h2 className="grid-title">{product.title}</h2>
        <p className="grid-price">
          <span data-testid="bold" className="bold">
            Price:{" "}
          </span>
          ${product.price}
        </p>
      </div>
      <p className="grid-describ">
        <span data-testid="bold" className="bold">
          Description:{" "}
        </span>
        {product.description}
      </p>
      <div className="grid-add">
        <div className="input-num">
          <lable htmlFor="quantity">
            <span data-testId="bold" className="bold">
              Quantity:{" "}
            </span>
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
