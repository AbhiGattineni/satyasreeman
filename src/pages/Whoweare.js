import { BsArrowRight } from "react-icons/bs";
import Partner from './Partner';

import Card from '../Components/Card';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

const WhoWeAre = () => {
    return (
        <div className="w-full bg-white" id="whoweare">
            <div className="md:grid md:grid-rows-4">
                <div className="md:row-span-1 flex justify-center items-center">
                    {/* <div className="md:grid md:grid-rows-4"> */}
                    <div className="md:row-span-1 text-5xl">
                        Leading The Way.
                    </div>
                    {/* <div className="md:row-span-1 col-span-2 text-small">
                            We believe that the fundamental role of leadership is to create and maintain a culture that strengthens the company's core values, encourages employees to do the right thing, and helps drive the company's long-term strategy. All delivered with humility and compassion.
                        </div>
                        <div className="md:row-span-1 mt-5">
                            <a><BsArrowRight />Meet our Learders</a>
                        </div> */}
                    {/* </div> */}
                </div>
                <div className='md:row-span-2 bg-white'>
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        <Card image={image1} />
                        <Card image={image2} />
                    </div>
                </div>
                <div class="lg:m-8">
                    <Partner />
                </div>
            </div>


        </div>
    )
}

export default WhoWeAre;