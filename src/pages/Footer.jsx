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
            <div className="flex flex-col">
                <div className="font-bold text-center  text-white">Registerd Office Address</div>
                <div className="text-center text-white">D.No:6-1132/C</div>
                <div className="text-center text-white">Hyderabad</div>
                <div className="text-center text-white">Telangana</div>
                <div className="text-center text-white">500072.</div>
            </div>
            <div className="border-t-4 border-grey-300 mx-5"></div>
        </div>
    )
}

export default Footer;