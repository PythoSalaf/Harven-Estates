import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllProperty, Error, Home, Layout } from "./Pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/all-properties",
          element: <AllProperty />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
