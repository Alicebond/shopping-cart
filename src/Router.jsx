import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { useState, useEffect, useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Layout from "./Layout.jsx";

const Router = () => {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const price = useRef(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  function addCart(product, quantity) {
    setCartItems((prevCart) => [
      { ...product, quantity: quantity, uid: uuidv4() },
      ...prevCart,
    ]);
    price.current = product.price * quantity;
    setSubtotal((prevPrice) => (prevPrice += price.current));
  }

  function clearCart() {
    setCartItems([]);
    setSubtotal(0);
  }

  function removeItem(id) {
    setCartItems((prevCart) => prevCart.filter((i) => i.uid !== id));
    cartItems.forEach((i) => {
      if (i.uid === id)
        setSubtotal((prevPrice) => (prevPrice -= i.price * i.quantity));
    });
  }

  function getNumInCart() {
    let num = 0;
    cartItems.forEach((i) => {
      num += +i.quantity;
    });
    return num;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout num={getNumInCart() > 99 ? "99+" : getNumInCart()} />,
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
              subtotal={subtotal}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
