import React, { useEffect, useRef, useState } from 'react';
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
function Sliderimg({ executeScroll, refs }) {
    const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
    const [isOpen, setOpen] = useState(false);;

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
        if (window.scrollY >= 500) {
            setcolor(true)
        }
        else {
            setcolor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <div>
            <div className='flex flex-row justify-between drop-shadow-md px-5 w-full fixed top-0' id={color ? 'navc' : 'navt'}>
                <div className='md:columns-3 logo p-6 text-xl md:text-md drop-shadow-lg text-black font-bold text-white'>
                    <h1>SatyaSreeman</h1>
                </div>
                <div className='md:columns-9 hidden menu justify-items-start drop-shadow-md list-none lg:flex lg:flex-row text-white uppercase my-7 text-sm'>
                    <li className='menu-list mx-2  decoration-2' onClick={() => {
                        executeScroll(refs.businessRef);
                        if (isOpen) setOpen(false);
                    }}>Bussines</li>
                    <li className='menu-list mx-5 sm:text-xs decoration-2' onClick={() => {
                        executeScroll(refs.whatWeDoRef);
                        if (isOpen) setOpen(false);
                    }}>What We Do</li>
                    <li className='menu-list mx-5 sm:text-xs decoration-2' onClick={() => {
                        executeScroll(refs.whoWeAreRef);
                        if (isOpen) setOpen(false);
                    }}>Who We Are</li>
                    <li className='menu-list mx-5 sm:text-xs decoration-2' onClick={() => {
                        executeScroll(refs.careersRef);
                        if (isOpen) setOpen(false);
                    }}>Careers</li>
                    <li className='menu-list mx-5 sm:text-xs decoration-2' onClick={() => {
                        executeScroll(refs.mediaRef);
                        if (isOpen) setOpen(false);
                    }}>Media</li>
                    <li className='menu-list mx-5 sm:text-xs decoration-2' onClick={() => {
                        executeScroll(refs.contactRef);
                        if (isOpen) setOpen(false);
                    }}>
                        <div className='mx-3'>
                            <GoMail size={18} style={{ marginTop: '1px' }} />
                        </div>
                    </li>
                </div>
                <button onClick={() => { showSideMenu() }} className='lg:hidden menu-button text-white'>
                    {(isSideMenuOpen) ? <CgClose /> : <FaBars />}
                    {(isSideMenuOpen) ? SideMenu() : ''}
                </button>
            </div>
            <div ref={slideRef} className="select-none">
                <img src={Images[currentIndex]} alt="image" className="lg:h-screen md:h-screen w-full"></img>
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
        <div className='fixed drop-shadow-md h-screen w-full sm:w-1/2 md:w-2/5 bg-black top-0 left-0'>
            <div className='menu list-none text-white flex flex-col text-center mt-14 uppercase py-5 text-sm font-bold'>
                <li className='menu-list py-3 hover:border-2' ><a href='#bussiness' className='px-10' >Business</a></li>
                <li className='menu-list py-3 hover:border-2'><a href='#whatwedo' className='px-10'>What We Do</a></li>
                <li className='menu-list py-3 hover:border-2'><a href='#whoweare' className='px-10'>Who We Are</a></li>
                <li className='menu-list py-3 hover:border-2'><a href='#careers' className='px-10'>Careers</a></li>
                <li className='menu-list py-3 hover:border-2'><a href='#media' className='px-10'>Media</a></li>
                <li className='menu-list py-3 hover:border-2'><a href='#contactus' className='px-10'>Contact Us</a></li>
            </div>
        </div>
    );
}

export default Sliderimg;