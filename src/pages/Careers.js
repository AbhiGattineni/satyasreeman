import Careerresume from "./Careerresume";

const Careers = ({ refer }) => {
    return (
        <div className="container mx-auto px-4 bg-white rounded-lg" ref={refer} id="careers">
            <div className="md:grid md:grid-rows-4">
                <div className="md:row-span-1 flex justify-center items-center">
                    <div className="text-3xl font-bold">
                        Careers
                    </div>
                </div>
                <div className="md:row-span-3">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1">
                        <div className="grid grid-cols-1 m-5">
                            <div className="text-xl font-bold text-center mx-10 border border-radius-2 rounded-lg">
                                Jobs
                                <div className="m-2 font-light">
                                    Currently no job postings
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 mx-10">
                            <Careerresume tag={"Forward Your Resume"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers;