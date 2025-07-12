import image1 from "../images/general.jpg";
import image2 from "../images/heavy.jpg";
import image3 from "../images/infra.jpg";
import Verticalcard from "../Components/Verticalcard";

const Whatwedo = ({ refer }) => {
    return (
        <div className="container mx-auto px-4 bg-white" ref={refer} id="whatwedo">
            <div className="md:grid md:grid-rows-4">
                <div className="md:row-span-1 flex justify-center items-center">
                    <div className="text-3xl font-bold">
                        What We DO.
                    </div>
                </div>
                <div className="md:row-span-2 md:grid md:grid-cols-2 lg:grid-cols-3">
                    <Verticalcard image={image1} tag={"General Engineering"} description={"SatyaSreeman focuses on manufacturing specialized machinery and equipment that meet exacting industry specifications. We deliver custom solutions to clients in sectors requiring high-precision mechanical components and systems."} />
                    <Verticalcard image={image2} tag={"Heavy Engineering"} description={"With core expertise in large-scale industrial plant support, we undertake fabrication and assembly tasks for heavy-duty operations. This includes critical machinery support and integration work executed with structural strength and reliability."} />
                    <Verticalcard image={image3} tag={"Infrastructure"} description={"Positioned near Hyderabad, SatyaSreeman offers infrastructure-based engineering services, including site-based support and civil fabrication. Projects are approached with a focus on delivery integrity, industry standards, and long-term client utility."} />
                </div>
            </div>
        </div>
    )
}

export default Whatwedo;