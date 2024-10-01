import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {  Home, Layout } from "./Pages";

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
       
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
