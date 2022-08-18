import { BsArrowRight } from "react-icons/bs";

import Card from '../Components/Card';
import image1 from "../images/subbarao.png";
import image2 from "../images/gopi.png";

const WhoWeAre = ({ refer }) => {
    return (
        <div className="container mx-auto px-4 bg-white" ref={refer} id="whoweare">
            <div className="md:grid md:grid-rows-4 mb-5">
                <div className="md:row-span-1 flex justify-center items-center">
                    <div className="m-5">
                        <div className="text-7xl font-sans">
                            Leading The Way.
                        </div>
                        <div className="grid md:grid-cols-3 mt-5">
                            <div className="md:col-span-2 lg:col-span-1 text-sm">
                                We believe that the fundamental role of leadership is to create and maintain a culture that strengthens the company's core values, encourages employees to do the right thing, and helps drive the company's long-term strategy. All delivered with humility and compassion.
                            </div>
                        </div>
                        <div className="flex flex-row items-center text-rose-800 font-bold mt-5">
                            <div className="mr-3"><BsArrowRight /></div>
                            <div>Meet Our Leaders & Team</div>
                        </div>
                    </div>
                </div>
                <div className='md:row-span-2 bg-white mt-14'>
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        <Card image={image1} name={"Subba Rao Gattineni"} />
                        <Card image={image2} name={"Raja Gopal Gattineni"} />
                    </div>
                </div>
                <div class="md:row-span-1"></div>
            </div>
        </div>
    )
}

export default WhoWeAre;