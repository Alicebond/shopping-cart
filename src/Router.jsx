import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import Header from "./Header.jsx";
// import ProductDetail from "./ProductDetail.jsx";

const Router = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const productElements = data.map((i) => (
    <div key={i.id} className="product">
      <p>{i.title}</p>
      <img src={i.image} />
    </div>
  ));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          index: true,
          element: <App />,
        },
        {
          path: "/products",
          element: <Products items={productElements} />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
