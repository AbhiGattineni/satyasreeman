import React, { useState } from 'react';
import { BsLinkedin, BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";

const Footer = ({ executeScroll, refs }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="bg-slate-800">

            <div className="grid grid-cols-6 p-5 list-none">
                <li to="bussiness" onClick={() => {
                    executeScroll(refs.businessRef);
                    if (isOpen) setOpen(false);
                }}><div className="text-white cursor-pointer">Business</div></li>
                <li to="whatwedo" onClick={() => {
                    executeScroll(refs.whatWeDoRef);
                    if (isOpen) setOpen(false);
                }}><div className="text-white cursor-pointer">What We Do</div></li>
                <li to="whoweare" onClick={() => {
                    executeScroll(refs.whoWeAreRef);
                    if (isOpen) setOpen(false);
                }}><div className="text-white cursor-pointer">Who We Are</div></li>
                <li to="careers" onClick={() => {
                    executeScroll(refs.careersRef);
                    if (isOpen) setOpen(false);
                }}><div className="text-white cursor-pointer">Careers</div></li>
                <li to="media" onClick={() => {
                    executeScroll(refs.mediaRef);
                    if (isOpen) setOpen(false);
                }}><div className="text-white cursor-pointer">Media</div></li>
                <li to="contactus" onClick={() => {
                    executeScroll(refs.contactRef);
                    if (isOpen) setOpen(false);
                }}><div className="text-white cursor-pointer">Contact Us</div></li>

            </div>
            <div className="border-t-2 border-grey-300 mx-5"></div>
            <div className="flex flex-row justify-center">
                <div><BsFacebook className='m-3 mx-5 text-white' size={20} onClick={() =>
                    window.open(
                        "https://www.facebook.com/abhi.gattineni/",
                        "_blank"
                    )
                } /></div>
                <div><BsInstagram className='m-3 mx-5 text-white' size={20} onClick={() =>
                    window.open(
                        "https://www.instagram.com/abhigattineni/",
                        "_blank"
                    )
                } /></div>
                <div><BsLinkedin className='m-3 mx-5 text-white' size={20} onClick={() =>
                    window.open(
                        "https://www.liedin.com/in/abhishek-gattineni-05937088/",
                        "_blank"
                    )
                } /></div>
                <div><BsYoutube className='m-3 mx-5 text-white' size={20} onClick={() =>
                    window.open(
                        "https://www.liedin.com/in/abhishek-gattineni-05937088/",
                        "_blank"
                    )
                } /></div>
            </div>
        </div>
    )
}

export default Footer;