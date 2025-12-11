import { createBrowserRouter, Navigate } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Blog from "../pages/Blog";
import Layout from "../pages/Layout";

const portfolioRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to={"home"} replace={true} /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "resume", element: <Resume /> },
      { path: "Blog", element: <Blog /> },
    ],
  },
 
]);

export default portfolioRoutes;
