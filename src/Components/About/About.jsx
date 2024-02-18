import React from 'react'
import HomeStyle from '../Home/Home.module.css'
export default function About() {
    return (
        <div className=" overflow-hidden container p-5 text-center d-flex flex-column align-items-center">
            <h1 className='text-white mt-5 pt-5'>ABOUT COMPONENT</h1>
            <div className={`bg-white text-white  ${HomeStyle.hight_start} position-relative mt-3`}>
                <span className={`position-absolute top-0 translate-middle ${HomeStyle.bg_background}  px-3`}>
                    <i className="fa-solid fa-star"></i>
                </span>

            </div>
            <div className="row pb-5 my-5 text-white text-start">
                <div className="col-md-6 ">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    )
}
