import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const productElements = data.map((i) => (
    <div key={i.id} className="product">
      <Link to={`${i.id}`}>
        <p>{i.title}</p>
        <img src={i.image} />
      </Link>
    </div>
  ));

  return (
    <div>
      <div className="products">{productElements}</div>
    </div>
  );
};

export default Products;
