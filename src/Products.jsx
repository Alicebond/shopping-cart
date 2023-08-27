import { Link } from "react-router-dom";

const Products = ({ data, loading }) => {
  const productElements = data.map((i) => (
    // Use `` to define value of to property inside Link,
    // becase i.id is a number, but link need a string.
    <div key={i.id} className="product">
      <Link to={`${i.id}`}>
        <p>{i.title}</p>
        <img src={i.image} />
      </Link>
    </div>
  ));

  if (loading) return <h3>Loading...</h3>;

  return (
    <div>
      <div className="products">{productElements}</div>
    </div>
  );
};

export default Products;
