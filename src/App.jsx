import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Context from "./components/context/Context";
import Login from "./components/views/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
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
