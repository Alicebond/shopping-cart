import { Link } from "react-router-dom";

const Products = ({ items }) => {
  return (
    <div>
      <Link to="/" clasName="products-link">
        <p>{"<-----"}Back to homepage</p>
      </Link>
      <div className="products">{items}</div>
    </div>
  );
};

export default Products;
