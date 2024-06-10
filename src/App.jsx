import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import { dashboardDataLoader } from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="dashboard"
          element={<Dashboard />}
          loader={dashboardDataLoader}
        />
      </Route>
    </Route>
  ),
  { basename: "/react-kinde-authentication" }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
