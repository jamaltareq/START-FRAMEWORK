import footer from "./Footer.module.css"
export default function Footer() {
    return (
        <footer className={`  ${footer.bg_fotter} pt-5`}>
            <div className="row text-white text-center p-5 me-0">
                <div className="col-md-4">
                    <div className="">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <span>Clark, MO 65243</span>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="text-center">
                        <h3>AROUND THE WEB</h3>
                        <div className=" d-flex justify-content-center">
                            <div className={` m-2 p-2 border border-white ${footer.roundeds}`} >
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className={` m-2 p-2 border border-white ${footer.roundeds}`} >
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className={` m-2 p-2 border border-white ${footer.roundeds}`} >
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                            <div className={` m-2 p-2 border border-white ${footer.roundeds}`} >
                                <i className="fa-brands fa-dribbble"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

                    </div>
                </div>
            </div>
            <div className={`${footer.bg_deep_footer} m-0 p-3`}>
                <p className="text-center text-white">Copyright © Your Website 2021</p>
            </div>
        </footer>
    )
}
