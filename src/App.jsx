import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
    // fetch("https://fakestoreapi.com/carts")
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
  }, []);

  const productElements = data.map((i) => (
    <div key={i.id} className="product">
      <p>{i.title}</p>
      <img src={i.image} />
    </div>
  ));

  return (
    <div className="app">
      <Header />
      <div className="landing">
        <h1>Welcome to Shopping Now!</h1>
        <Link to="products">
          <button className="start-btn">Browse our products {"---->"}</button>
        </Link>
      </div>
    </div>
  );
}

export default App;

/* <div className="products">{productElements}</div> */

// Object { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, … }
// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: Object { rate: 3.9, count: 120 }
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
