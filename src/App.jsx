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
  ResetPassword,
  SignUp
} from "./Pages";
import SignIn from "./Pages/SignIn";
import { AgentLogin } from "./components";

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
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
          path: "sign-in",
          element: <SignIn />,
        },
        {
          path: "Agent-signIn",
          element: <AgentLogin/>,
        },
        {
          path: "/reset-password",
          element: <ResetPassword />,
        }
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
