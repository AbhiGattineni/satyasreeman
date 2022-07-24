import React, { useEffect, useRef, useState } from 'react';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { GoMail } from "react-icons/go";

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
    return (
        <div>
            <div className='flex flex-row justify-between drop-shadow-md px-5 bg-opacity-0 sticky top-0'>
                <div className='md:columns-3 logo p-6 text-xl md:text-md drop-shadow-lg text-black font-bold text-white'>
                    <h1>SatyaSreeman</h1>
                </div>
                <div className='md:columns-9 hidden menu justify-items-start drop-shadow-md list-none lg:flex lg:flex-row text-white uppercase my-7 text-sm'>
                    <li className='menu-list mx-2 hover:underline decoration-2'><a href='#' className='mx-3 sm:text-xs'>Bussines</a></li>
                    <li className='menu-list mx-2 hover:underline decoration-2'><a href='#' className='mx-3 sm:text-xs'>What We Do</a></li>
                    <li className='menu-list mx-2 hover:underline decoration-2'><a href='#' className='mx-3 sm:text-xs'>Who We Are</a></li>
                    <li className='menu-list mx-2 hover:underline decoration-2'><a href='#' className='mx-3 sm:text-xs'>Careers</a></li>
                    <li className='menu-list mx-2 hover:underline decoration-2'><a href='#' className='mx-3 sm:text-xs'>Mediag</a></li>
                    <li className='menu-list mx-2 hover:underline decoration-2'>
                        <div className='mx-3'>
                            <a href="#"><GoMail size={18} style={{ marginTop: '1px' }} /></a>
                        </div>
                    </li>
                </div>
                <button onClick={() => { showSideMenu() }} className='lg:hidden menu-button text-white'>
                    {(isSideMenuOpen) ? <CgClose /> : <FaBars />}
                    {(isSideMenuOpen) ? SideMenu() : ''}
                </button>
            </div>
            <div ref={slideRef} className="-mt-20 select-none">
                <img src={Images[currentIndex]} alt="image" className="h-screen w-full"></img>
            </div>
            <div className='absolute justify-between flex top-1/2 w-full transform -translate-y-1/2 p-2 items-center'>
                <button onClick={handleOnPrevClick}><GrPrevious /></button>
                <button onClick={handleOnNextClick}><GrNext /></button>
            </div>
        </div >
    );
}

function SideMenu() {
    return (
        <div className='fixed drop-shadow-md h-screen w-full sm:w-1/2 md:w-2/5 bg-black top-0 left-0'>
            <div className='menu list-none text-white flex flex-col text-center mt-14 uppercase py-5 text-sm font-bold'>
                <li className='menu-list py-3 hover:border-2'><a href='#' className='px-10'>Menu</a></li>
                <li className='menu-list py-3 hover:border-2'><a href='#' className='px-10'>About Us</a></li>
                <li className='menu-list py-3 hover:border-2'><a href='#' className='px-10'>Contact us</a></li>
            </div>
        </div>
    );
}

export default Sliderimg;