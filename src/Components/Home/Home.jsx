import mainImage from '../../Assets/Images/avataaars.svg'
import HomeStyle from './Home.module.css'
export default function Home() {

    return <div className=" overflow-hidden container p-5 text-center d-flex flex-column align-items-center">
        <img src={mainImage} width={250} />
        <h1 className='text-white mt-3'>START FRAMEWORK</h1>
        <div className={`bg-white text-white  ${HomeStyle.hight_start} position-relative mt-3`}>
            <span className={`position-absolute top-0 translate-middle ${HomeStyle.bg_background}  px-3`}>
                <i className="fa-solid fa-star"></i>
            </span>

        </div>
        <p className='text-white mt-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
}
