import { RouterProvider } from "react-router";
import portfolioRoutes from "./routing/PortfolioRoute.jsx";

const App = () => {
  return (
    <div>
      <RouterProvider router={portfolioRoutes} />
    </div>
  );
};

export default App;
