import Careerresume from "./Careerresume";

const Contactus = () => {
    return (
        <div className="w-full bg-slate-100">
            <div className="md:grid md:grid-rows-4">
                <div className="md:row-span-1 flex justify-center items-center">
                    <div className="text-3xl font-bold">
                        Contact Us.
                    </div>
                </div>
                <div className="md:row-span-3">
                    <div className="bg-white m-10 rounded-lg md:grid md:grid-cols-2">
                        <Careerresume />
                        <div className="font-bold m-5 border border-radius-2"><div>Line number</div>
                            <div>Line number</div>
                            <div>Hyderabad</div>
                            <div>Andhra Pradesh</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus;