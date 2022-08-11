import { BsArrowRight } from "react-icons/bs";

import Card from '../Components/Card';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

const WhoWeAre = ({ refer }) => {
    return (
        <div className="container mx-auto px-4 bg-white" ref={refer} id="whoweare">
            <div className="md:grid md:grid-rows-4">
                <div className="md:row-span-1 flex justify-center items-center">
                    <div class="md:grid md:grid-rows-3">
                        <div className="md:row-span-1 text-7xl font-sans">
                            Leading The Way.
                        </div>
                        <p className="flex flex-row items-center mt-3">We believe that the fundamental role of leadership is to create and maintain a culture that strengthens the company's core values, encourages employees to do the right thing, and helps drive the company's long-term strategy. All delivered with humility and compassion.</p>
                        <div className="flex flex-row items-center text-rose-800 font-bold mt-3">
                            <div className="mr-3"><BsArrowRight /></div>
                            <div>Meet Our Leaders & Team</div>
                        </div>
                    </div>
                </div>
                <div className='md:row-span-2 bg-white'>
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        <Card image={image1} />
                        <Card image={image2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;