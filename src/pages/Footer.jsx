
import { BsLinkedin, BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="bg-slate-800">

            <div className="grid grid-cols-6 p-5">
                <Link to="bussiness" spy={true} smooth={true} offset={50} duration={500}><div className="text-white cursor-pointer">Business</div></Link>
                <Link to="whatwedo" spy={true} smooth={true} offset={50} duration={500}><div className="text-white cursor-pointer">What We Do</div></Link>
                <Link to="whoweare" spy={true} smooth={true} offset={50} duration={500}><div className="text-white cursor-pointer">Who We Are</div></Link>
                <Link to="careers" spy={true} smooth={true} offset={50} duration={500}><div className="text-white cursor-pointer">Careers</div></Link>
                <Link to="media" spy={true} smooth={true} offset={50} duration={500}><div className="text-white cursor-pointer">Media</div></Link>
                <Link to="contactus" spy={true} smooth={true} offset={50} duration={500}><div className="text-white cursor-pointer">Contact Us</div></Link>

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
        </div>
    )
}

export default Footer;