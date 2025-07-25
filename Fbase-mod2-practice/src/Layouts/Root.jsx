import { Outlet } from "react-router-dom";
import HeaderPage from "../Components/Header/HeaderPage";
import Footer from "../Components/Footer/Footer";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto">
            <HeaderPage></HeaderPage>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;