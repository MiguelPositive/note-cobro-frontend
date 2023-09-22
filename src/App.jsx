import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Context from "./components/context/Context";
import Login from "./components/views/Login";
import Dashboard from "./components/views/Dashboard";

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
