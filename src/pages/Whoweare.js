import { BsArrowRight } from "react-icons/bs";
import Partner from './Partner';

import Card from '../Components/Card';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

const WhoWeAre = ({ refer }) => {
    return (
        <div className="w-full bg-white" ref={refer} id="whoweare">
            {console.log(refer)}
            <div className="md:grid md:grid-rows-4">
                <div className="md:row-span-1 flex justify-center items-center">
                    <div className="md:row-span-1 text-5xl">
                        Leading The Way.
                    </div>
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