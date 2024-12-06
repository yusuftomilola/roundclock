import "./App.css";
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/Home";
import AdminHome from "./pages/admin/AdminHome";
import Monitoring from "./pages/admin/Monitoring";
import Users from "./pages/admin/Users";
import Subscription from "./pages/admin/Subscription";
import Spaces from "./pages/admin/Spaces";
import Complaints from "./pages/admin/Complaints";
import UserProfile from "./pages/admin/UserProfile";
import StaffProfile from "./pages/admin/StaffProfile";
import { ToastContainer } from "react-toastify";

// michael
import ClockIn from "./pages/ClockIn";
import ClockOut from "./pages/ClockOut";
import NewHubUser from "./pages/newHubUsers/NewHubUser";
import Landing from "./pages/Landing";
import AdminLogin from "./pages/auth/AdminLogin";
import { AdminProvider } from "./context/AdminContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/new-user",
    element: <NewHubUser />,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home/clock-in",
        element: <ClockIn />,
      },
      {
        path: "/home/clock-out",
        element: <ClockOut />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
    ],
  },
  {
    path: "/monitoring",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Monitoring />,
      },
    ],
  },
  {
    path: "/users",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <StaffProfile />,
      },
    ],
  },
  {
    path: "/subscription",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Subscription />,
      },
      {
        path: "/subscription/:id",

        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/spaces",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Spaces />,
      },
    ],
  },
  {
    path: "/complaints",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Complaints />,
      },
    ],
  },
]);

function App() {
  return (
    <AdminProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "transparent", color: "#FEDC44" }}
      />

      <RouterProvider router={router} />
    </AdminProvider>
  );
}

export default App;
