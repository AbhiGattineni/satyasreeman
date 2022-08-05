import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { GoMail } from "react-icons/go";
import "./nav.css";

let count = 0;
function Sliderimg() {
    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

    const Images = [image1, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleOnNextClick = () => {
        count = (count + 1) % Images.length;
        setCurrentIndex(count);
    }
    const handleOnPrevClick = () => {
        const productsLength = Images.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
    }

    const slideRef = useRef()
    useEffect(() => {
        startSlider();
    }, [])

    const startSlider = () => {
        setInterval(() => {
            handleOnNextClick()
        }, 3000);
    }

    const showSideMenu = () => {
        (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
    }

    const [color, setcolor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 300) {
            setcolor(true)
        }
        else {
            setcolor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <div id="home">
            <div className="fixed w-full flex justify-between items-center px-4 md:px-12 h-20" id={color ? "navc" : "navt"}>
                <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
                    <h1 className='text-white font-bold text-xl p-3 cursor-pointer'>SATYASREEMAN</h1>
                </Link>
                <nav>
                    <div className='md:columns-9 hidden menu justify-items-start drop-shadow-md list-none lg:flex lg:flex-row text-white uppercase my-7 text-sm'>
                        <li className='menu-list mx-2 hover:underline decoration-2 cursor-pointer'><Link to='bussiness' spy={true} smooth={true} offset={50} duration={500} className='mx-3 sm:text-xs'>Bussiness</Link></li>
                        <li className='menu-list mx-2 hover:underline decoration-2 cursor-pointer'><Link to='whatwedo' spy={true} smooth={true} offset={50} duration={500} className='mx-3 sm:text-xs'>What We Do</Link></li>
                        <li className='menu-list mx-2 hover:underline decoration-2 cursor-pointer'><Link to='whoweare' spy={true} smooth={true} offset={50} duration={500} className='mx-3 sm:text-xs'>Who We Are</Link></li>
                        <li className='menu-list mx-2 hover:underline decoration-2 cursor-pointer'><Link to='careers' spy={true} smooth={true} offset={50} duration={500} className='mx-3 sm:text-xs'>Careers</Link></li>
                        <li className='menu-list mx-2 hover:underline decoration-2 cursor-pointer'><Link to='media' spy={true} smooth={true} offset={50} duration={500} className='mx-3 sm:text-xs'>Media</Link></li>
                        <li className='menu-list mx-2 hover:underline decoration-2 cursor-pointer'>
                            <div className='mx-3'>
                                <Link to="contactus" spy={true} smooth={true} offset={50} duration={500}><GoMail size={18} style={{ marginTop: '1px' }} /></Link>
                            </div>
                        </li>
                    </div>
                    <button onClick={() => { showSideMenu() }} className='lg:hidden menu-button text-white'>
                        {(isSideMenuOpen) ? <CgClose /> : <FaBars />}
                        {(isSideMenuOpen) ? SideMenu() : ''}
                    </button>
                </nav>
            </div>
            <div ref={slideRef} className="select-none">
                <img src={Images[currentIndex]} alt="image" className="h-screen w-full"></img>
            </div>
            <div className='absolute justify-between flex top-1/2 w-full transform -translate-y-1/2 p-2 items-center'>
                <button onClick={handleOnPrevClick}><GrPrevious /></button>
                <button onClick={handleOnNextClick}><GrNext /></button>
            </div>
        </div>
    );
}

function SideMenu() {
    return (
        <div className='fixed drop-shadow-md h-screen w-full bg-black mt-5 left-0 scroll-none'>
            <div className='menu list-none text-white flex flex-col text-center mt-14 uppercase py-5 text-sm font-bold uppercase'>
                <li className='menu-list py-3 hover:border-2'><a href='bussiness' className='px-10'>Business</a></li>
                <li className='menu-list py-3 hover:border-2'><a href='whatwedo' className='px-10'>Whatwedo</a></li>
                <li className='menu-list py-3 hover:border-2'><a href='whoweare' className='px-10'>WhoWeAre</a></li>
                <li className='menu-list py-3 hover:border-2'><a href='careers' className='px-10'>Careers</a></li>
                <li className='menu-list py-3 hover:border-2'><a href='media' className='px-10'>Media</a></li>
                <li className='menu-list py-3 hover:border-2'><a href='contactus' className='px-10'>Contact</a></li>
            </div>
        </div>
    );
}

export default Sliderimg;