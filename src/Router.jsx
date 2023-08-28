import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import Header from "./Header.jsx";
import ProductDetail from "./ProductDetail.jsx";

const Router = () => {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  function addCart(product, quantity) {
    while (quantity > 0) {
      setCartItems((prevCart) => [{ ...product, uid: uuidv4() }, ...prevCart]);
      quantity--;
    }
  }

  function clearCart() {
    setCartItems([]);
  }

  function removeItem(id) {
    setCartItems((prevCart) => prevCart.filter((i) => i.uid !== id));
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header num={cartItems.length} />,
      children: [
        {
          index: true,
          element: <App />,
        },
        {
          path: "products",
          element: <Products data={data} loading={loading} />,
        },
        {
          path: "products/:id",
          element: <ProductDetail addCart={addCart} data={data} />,
        },
        {
          path: "cart",
          element: (
            <Cart
              items={cartItems}
              clearCart={clearCart}
              removeItem={removeItem}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
