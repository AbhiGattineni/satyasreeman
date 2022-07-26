import Card from '../Components/Card';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

const WhoWeAre = () => {
    return (
        <div className="h-screen w-full bg-slate-100">
            <div className="text-3xl font-bold text-center mt-5">
                Leading The Way.
            </div>
            <div class="grid lg:grid-cols-6">
                <div className="text-sm text-left lg:col-start-3 lg:col-span-2 p-3">
                    We believe that the fundamental role of leadership is to create and maintain a culture that strengthens the company's core values, encourages employees to do the right thing, and helps drive the company's long-term strategy. All delivered with humility and compassion.
                </div>
            </div>
            <div className='border border-1 rounded-md bg-white'>
                <div className=" md:grid md:grid-cols-2">
                    <Card image={image1} />
                    <Card image={image2} />
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;