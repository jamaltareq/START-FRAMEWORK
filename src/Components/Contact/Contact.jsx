import React from 'react'
import HomeStyle from '../Home/Home.module.css'
export default function Contact() {
    return (
        <>
            <div className=" overflow-hidden container p-5 text-center d-flex flex-column align-items-center">
                <h1 className='text-white'>CONTACT SECTION</h1>
                <div className={`bg-white text-white  ${HomeStyle.hight_start} position-relative mt-3`}>
                    <span className={`position-absolute top-0 translate-middle ${HomeStyle.bg_background}  px-3`}>
                        <i className="fa-solid fa-star"></i>
                    </span>
                </div>
            </div>
            <div className="inputs w-50 mx-auto">
                <input type="text" placeholder="user name" style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "5px", borderColor: " transparent transparent black transparent", borderBottomColor: "black", outline: "none", color: "black", background: "transparent", }} />
                <input type="text" placeholder="user Age" style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "5px", borderColor: " transparent transparent black transparent", borderBottomColor: "black", outline: "none", color: "black", background: "transparent", }} />
                <input type="text" placeholder="user email" style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "5px", borderColor: " transparent transparent black transparent", borderBottomColor: "black", outline: "none", color: "black", background: "transparent", }} />
                <input type="text" placeholder="user password" style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "5px", borderColor: " transparent transparent black transparent", borderBottomColor: "black", outline: "none", color: "black", background: "transparent", }} />
                <button type="button" className="btn btn-primary my-5"> send massage</button>
            </div>
        </>
    )
}
