import { Outlet } from "react-router-dom";
import Header from "../Components/HeaderPage/Header";
import Footer from "../Components/FooterPage/Footer";

const Root = () => {

    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;