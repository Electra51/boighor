import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import AllBook from "../pages/AllBook";
import BookDetail from "../pages/BookDetail";
import NotFound from "../pages/NotFound";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


const routes = createBrowserRouter([
   {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
    path: "/allbook",
    element: <AllBook/>,
  },  
  {
    path: "/bookdetail/:id",
    element: <BookDetail/>,
  },
    {
    path: "/wishlist",
    element: <Wishlist/>,
  },  
   
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
     
    ],
  },
 
  
   
   {
    path: "*",
    element: <NotFound/>,
  },
]);
 
  
  
  
 

export default routes;