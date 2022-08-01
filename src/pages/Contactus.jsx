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
                        <Careerresume tag={"Write To Us"} />
                        <div className="m-5 border border-radius-2 grid content-center">
                            <div className="flex flex-col">
                                <div className="text-2xl text-center">Satya Sreeman Engineering & Contractors Ltd</div>
                                <div className="font-bold text-center">Registerd Office Address</div>
                                <div className="text-center">D.No:6-1132/C</div>
                                <div className="text-center">Hyderabad</div>
                                <div className="text-center">Telangana</div>
                                <div className="text-center">500072.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus;