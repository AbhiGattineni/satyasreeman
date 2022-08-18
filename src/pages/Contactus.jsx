import Careerresume from "./Careerresume";

const Contactus = ({ refer }) => {
    return (
        <div className="w-full bg-white" ref={refer} id="contactus">
            <div className="container mx-auto px-4">
                <div className="md:grid md:grid-rows-4">
                    <div className="md:row-span-1 flex justify-center items-center">
                        <div className="text-3xl font-bold">
                            Contact Us.
                        </div>
                    </div>
                    <div className="md:row-span-3 mt-5 sm:mt-0">
                        <div className="text-xl font-bold text-center mx-10 border border-radius-2 rounded-lg">
                            Jobs
                            <div className="m-2 font-light">
                                Currently no job postings
                            </div>
                        </div>
                        <div className="bg-white m-10 rounded-lg md:grid md:grid-cols-2">
                            <Careerresume tag={"Write To Us"} />
                            <Careerresume tag={"Forward Your Resume"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus;