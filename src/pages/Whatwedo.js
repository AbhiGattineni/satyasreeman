import image1 from "../images/general.jpg";
import image2 from "../images/heavy.jpg";
import image3 from "../images/infra.jpg";
import Verticalcard from "../Components/Verticalcard";

const Whatwedo = () => {
    return (
        <div className="w-full bg-white">
            <div className="md:grid md:grid-rows-4">
                <div className="md:row-span-1 flex justify-center items-center">
                    <div className="text-3xl font-bold">
                        What We DO.
                    </div>
                </div>
                <div className="md:row-span-3 md:grid md:grid-cols-2 lg:grid-cols-3">
                    <Verticalcard image={image1} tag={"General Engineering"} />
                    <Verticalcard image={image2} tag={"Heavy Engineering"} />
                    <Verticalcard image={image3} tag={"Infrastructute"} />
                </div>
            </div>
        </div>
    )
}

export default Whatwedo;