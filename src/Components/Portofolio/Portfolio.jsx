import React, { useState } from 'react'
import HomeStyle from '../Home/Home.module.css'
import imageone from '../../Assets/Images/poert1.png'
import imagetwo from '../../Assets/Images/port2.png'
import imagethree from '../../Assets/Images/port3.png';
export default function Portfolio() {
    let [filter, setFilter] = useState(false)
    let [active, setActive] = useState(-1)

    let objImage = [
        {
            id: 1,
            image: imageone
        },
        {
            id: 2,
            image: imagetwo
        },
        {
            id: 3,
            image: imagethree
        },
        {
            id: 4,
            image: imageone
        },
        {
            id: 5,
            image: imagetwo
        },
        {
            id: 6,
            image: imagethree
        }
    ]
    function closepoup(e) {
        console.log(window.scrollY);
        if (e.target.tagName == 'IMG') {

        } else {
            setFilter(false)
        }
    }
    return (
        <>
            <div className=" overflow-hidden container p-5 text-center d-flex flex-column align-items-center">
                <h1 className='text-white'>PORTFOLIO COMPONENT</h1>
                <div className={`bg-white text-white  ${HomeStyle.hight_start} position-relative mt-3`}>
                    <span className={`position-absolute top-0 translate-middle ${HomeStyle.bg_background}  px-3`}>
                        <i className="fa-solid fa-star"></i>
                    </span>
                </div>
            </div>
            <div className="row my-4 g-4">

                {objImage.map((image, index) => {
                    return (

                        <div className="col-md-4" key={image.id} onClick={() => { setFilter(!filter); setActive(index) }}>

                            <div className={` ${HomeStyle.item} rounded-3 position-relative`} >
                                <img src={image.image} className='w-100 rounded-3' />
                                <div className={`${HomeStyle.layar} w-100 h-100 position-absolute top-0  d-flex justify-content-center align-items-center rounded-3 ${HomeStyle.bg_portofolio} `}>
                                    <i className='fa-solid fa-plus fs-1'></i>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {filter ?
                <div style={{ top: 0 + 'px', position: 'fixed', zIndex: 11500 }} onClick={closepoup} className={`  start-0 w-100 h-100 ${HomeStyle.color_edite}  d-flex justify-content-center align-items-center align-content-center overflow-y-hidden  `}>
                    <div style={{ width: 600 + 'px', height: 500 + 'px' }} className="  opacity-100 " >
                        <img src={objImage[active].image} className=' w-100 rounded-3 d-flex justify-content-center ' />
                    </div>
                </div> : ""}
        </>
    )
}
