import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Agents,
  AllAgents,
  AllProperty,
  Error,
  Home,
  Layout,
  PropertyDetails,
} from "./Pages";

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
        {
          path: "/become-an-agent",
          element: <Agents />,
        },
        {
          path: "/agents",
          element: <AllAgents />,
        },
        {
          path: "/property-detail/:id",
          element: <PropertyDetails />,
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
