import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Context from "./components/context/Context";
import Login from "./components/views/Login";
import Dashboard from "./components/views/Dashboard";
import DebtorMenu from "./components/views/DebtorMenu";
import ProductsDetails from "./components/views/ProductsDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/dashboard",
      element: <Dashboard />,
    },

    { path: "/debtor-menu", element: <DebtorMenu /> },

    { path: "/products-details", element: <ProductsDetails /> },
    {
      path: "*",
      element: <Login />,
    },
  ]);

  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  );
}

export default App;
