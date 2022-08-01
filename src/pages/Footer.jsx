const Footer = () => {
    return (
        <div className="bg-slate-800">
            <div className="grid grid-cols-6 p-5">
                <div className="text-white">Business</div>
                <div className="text-white">What We Do</div>
                <div className="text-white">Who We Are</div>
                <div className="text-white">Careers</div>
                <div className="text-white">Media</div>
                <div className="text-white">Contact Us</div>
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