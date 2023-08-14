import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Link to="/">
        <p>{"<-----"}Back to homepage</p>
      </Link>
      <h2>Products page goes here</h2>
    </div>
  );
};

export default Products;
