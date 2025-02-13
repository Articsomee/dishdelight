import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./views/Home";
import Recipes from "./views/Recipes";
import About from "./views/About";
import Contact from "./views/Contact";
import Favourites from "./views/Favourites";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/dishdelight/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Recipes",
        element: <Recipes />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Favourites",
        element: <Favourites />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
