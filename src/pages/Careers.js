import Careerresume from "./Careerresume";

const Careers = () => {
    return (
        <div className="h-screen w-full bg-slate-100">
            <div className="text-3xl font-bold text-center">
                Careers
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 border border-spacing-2">
                <div className="grid grid-cols-1 m-2 border border-spacing-2">
                    <div className="text-xl font-bold text-center">
                        Jobs
                    </div>
                    <div class="h-30 w-full m-2">
                        Currently no job postings
                    </div>
                </div>
                <div className="grid grid-cols-1 m-2 border border-spacing-2">
                    <div className="text-xl font-bold text-center m-3">
                        Forward your resume
                    </div>
                    <Careerresume />
                </div>
            </div>
        </div>
    )
}

export default Careers;