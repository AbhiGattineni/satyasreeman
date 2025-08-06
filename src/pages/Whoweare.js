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
                                We believe that fundamental role of leadership is to create and maintain a culture that strengthens the company's core values, encourages employees to do the right thing, and helps drive the company's long-term strategy. All delivered with humility and compassion.
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
                        <Card image={image1} name={"Subba Rao Gattineni"} description={"Venkata Subbarao Gattineni serves as a director at SatyaSreeman Engineering Contractors. He has overseen the company's strategic and operational direction since its incorporation in Hyderabad. Known for his commitment to engineering excellence, Subbarao leads company initiatives in manufacturing special-purpose machinery and delivering custom industrial solutions. He is deeply involved in shaping the company’s long-term vision and driving quality across all functions."} />
                        <Card image={image2} name={"Raja Gopal Gattineni"} description={"Raja Gopal Gattineni is also a director of the company, bringing leadership and continuity to the firm’s development. He contributes to overseeing key projects and maintaining client trust through disciplined implementation and a focus on operational integrity. His role extends across planning and execution, ensuring that every engagement aligns with client expectations and regulatory standards. Raja Gopal’s presence in the leadership team reinforces the company’s emphasis on trust and transparency."} />
                    </div>
                </div>
                <div className="md:row-span-1"></div>
            </div>
        </div>
    )
}

export default WhoWeAre;