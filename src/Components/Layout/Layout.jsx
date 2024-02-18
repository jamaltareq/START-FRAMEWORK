import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import layout from "./Layout.module.css"

export default function Layout() {
    return (
        <div className={`${layout.bg_layout}`}>
            <Header />
            <div className={`container ${layout.margin_top}`}>

                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    )
}
