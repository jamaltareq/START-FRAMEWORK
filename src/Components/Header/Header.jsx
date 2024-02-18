
import { NavLink, Link } from "react-router-dom"
import style from "./Header.module.css"
import "./Header.css"
export default function Header() {
    window.addEventListener('scroll', function () {
        // if scroll down after 45px (position Y)
        if (window.scrollY > 100) {

            document.querySelector('nav').classList.remove("py-4")
        } else {
            document.querySelector('nav').classList.add("py-4")
        }
    });
    return <>
        <nav className={`fixed-top py-4 navbar navbar-expand-lg ${style.bg_header} ${style.tarnstion_header}`}>
            <div className="container">
                <Link className=" fs-900 text-white h2 text-decoration-none" to="/">START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className=" h4 fw-bolder nav-link  text-white  " aria-current="page" to="about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="h4 fw-bolder nav-link text-uppercase text-white  " to="portfolio">portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="h4 fw-bolder nav-link text-white  " to="contact">CONTACT</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </>
}
