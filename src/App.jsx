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

{
  /* <div className="relative h-[70vh] md:h-screen bg-primary">
<div className="absolute inset-0 z-10">
  <img
    src={Cuate}
    alt="Vector Graphic"
    className="object-cover w-full h-full mx-auto opacity-90"
  />
</div>

<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
  <h1 className="text-4xl font-bold text-white md:text-6xl">
    Welcome to My Hero Section
  </h1>
  <p className="max-w-2xl mt-4 text-xl text-white">
    This is the hero section with a background color, vector overlay, and
    text on top.
  </p>
  <button className="px-8 py-3 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700">
    Get Started
  </button>
</div>
</div> */
}
