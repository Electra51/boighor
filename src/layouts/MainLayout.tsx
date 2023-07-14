import Footer from "./Footer";
import Navbar from "./Navbar";
import {Outlet} from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
        <Navbar/>
        <div className="">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
