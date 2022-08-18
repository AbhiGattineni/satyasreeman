import React, { useState } from 'react';
import { BsLinkedin, BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";

const Footer = ({ executeScroll, refs }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="bg-slate-800">
            <div className="container mx-auto px-4">
                <div className="flex justify-between p-5 list-none place-content-between">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <li to="bussiness" onClick={() => {
                            executeScroll(refs.businessRef);
                            if (isOpen) setOpen(false);
                        }}><div className="text-white cursor-pointer p-3">Business</div></li>
                        <li to="whatwedo" onClick={() => {
                            executeScroll(refs.whatWeDoRef);
                            if (isOpen) setOpen(false);
                        }}><div className="text-white cursor-pointer p-3">What We Do</div></li>
                        <li to="whoweare" onClick={() => {
                            executeScroll(refs.whoWeAreRef);
                            if (isOpen) setOpen(false);
                        }}><div className="text-white cursor-pointer p-3">Who We Are</div></li>
                        <li to="media" onClick={() => {
                            executeScroll(refs.mediaRef);
                            if (isOpen) setOpen(false);
                        }}><div className="text-white cursor-pointer p-3">Media</div></li>
                        <li to="contactus" onClick={() => {
                            executeScroll(refs.contactRef);
                            if (isOpen) setOpen(false);
                        }}><div className="text-white cursor-pointer p-3">Contact Us</div></li>
                    </div>
                </div>
                <div className="border-t-2 border-grey-300 mx-5"></div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                    <div className="flex grid-cols-4 gap-3 place-content-center md:place-content-start">
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
                                "https://www.linkedin.com/in/abhishek-gattineni-05937088/",
                                "_blank"
                            )
                        } /></div>
                        <div><BsYoutube className='m-3 mx-5 text-white' size={20} onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/abhishek-gattineni-05937088/",
                                "_blank"
                            )
                        } /></div>
                    </div>
                    <div className="m-3">
                        <div className="text-sm lg:text-right md:text-right text-center text-white">Satya Sreeman Engineering & Contractors Ltd</div>
                        {/* <div className="text-sm text-right text-white">Registerd Office Address</div>
                        <div className="text-sm text-right text-white">D.No:6-1132/C</div>
                        <div className="text-sm text-right text-white">Hyderabad</div>
                        <div className="text-sm text-right text-white">Telangana</div>
                        <div className="text-sm text-right text-white">500072.</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;