import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import AllBook from "../pages/AllBook";
import AddNewBook from "../pages/AddNewBook";
import BookDetail from "../pages/BookDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
   {
    path: "/home",
    element: <Home/>,
  },
   {
    path: "/allbook",
    element: <AllBook/>,
  },
   {
    path: "/addnewbook",
    element: <AddNewBook/>,
  },
  {
    path: "/bookdetail",
    element: <BookDetail/>,
  },
   {
    path: "/login",
    element: <Login/>,
  },
   {
    path: "/logout",
    element: <Register/>,
  },
]);

export default routes;