import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import Header from "./Header.jsx";
import ProductDetail from "./ProductDetail.jsx";

const Router = () => {
  const [cartItems, setCartItems] = useState([]);
  const [num, setNum] = useState(0);

  function addCart(product, quantity) {
    setNum((prevNum) => prevNum + +quantity);
    while (quantity > 0) {
      setCartItems((prevCart) => [product, ...prevCart]);
      quantity--;
    }
  }
  function clearCart() {
    setNum(0);
    setCartItems([]);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header num={num} />,
      children: [
        {
          index: true,
          element: <App />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <ProductDetail addCart={addCart} />,
        },
        {
          path: "cart",
          element: <Cart items={cartItems} clearCart={clearCart} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
