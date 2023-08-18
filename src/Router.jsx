import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import Header from "./Header.jsx";
import ProductDetail from "./ProductDetail.jsx";

const Router = () => {
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
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <ProductDetail />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
