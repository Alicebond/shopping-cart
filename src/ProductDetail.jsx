import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Link to="/">
        <p>{"<-----"}Back to homepage</p>
      </Link>
      <h2>{id}</h2>
    </div>
  );
};

export default ProductDetail;
