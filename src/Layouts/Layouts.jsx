import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-430px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
