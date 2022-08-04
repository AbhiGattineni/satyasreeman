import { BsLinkedin, BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-slate-800">
            <div className="flex justify-evenly p-5">
                <div className="text-white">Business</div>
                <div className="text-white">What We Do</div>
                <div className="text-white">Who We Are</div>
                <div className="text-white">Careers</div>
                <div className="text-white">Media</div>
                <div className="text-white">Contact Us</div>
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