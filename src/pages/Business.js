
import { BsArrowRight } from "react-icons/bs";

const Business = ({ refer }) => {
    return (
        <div className="px-4 bg-slate-100" ref={refer} id="bussiness">
            <div className="container mx-auto pt-10 md:pt-0">
                <div className="md:grid md:grid-cols-3">
                    <div className="row-span-1 md:col-span-1 md:h-screen flex justify-center items-center">
                        <div className="text-3xl font-bold">
                            Business.
                        </div>
                    </div>
                    <div className="row-span-2 md:col-span-2  m-5 flex justify-center items-center">
                        <div className="grid grid-rows max-w-3xl mx-auto text-justify">
                            <div className="mt-5">
SatyaSreeman Engineering Contractors is an established and reputed player in India’s engineering and contracting ecosystem. Founded with a vision to drive purposeful infrastructure and industrial development, the company has expanded its presence across key regions, delivering tailored engineering solutions that support national growth.
                            </div>
                            <div className="mt-5">
Our journey has been shaped by a focus on quality, precision, and client-first values. We actively contribute to core sectors such as civil construction, structural fabrication, and industrial support services, helping bridge the gap between design and execution across various domains.
                            </div>
                            <div className="mt-5">
We take immense pride in contributing to engineering excellence through disciplined project management, innovative thinking, and timely delivery. Our strength lies in our skilled teams and the trust we’ve earned from clients, partners, and collaborators over time.
                            </div>
                            <div className="mt-5">
SatyaSreeman is also aligned with forward-looking practices that embrace safety, sustainability, and workforce empowerment. Our approach is deeply rooted in transparency and continuous improvement—ensuring every project reflects accountability, care, and a long-term vision.
                            </div>
                            <div className="mt-5">
At the center of our growth is our commitment to people. We empower our teams with an open, performance-driven work culture and strive to build enduring value through meaningful relationships and reliable engineering solutions.
                            </div>
                            <div className="flex flex-row items-center text-rose-800 font-bold mt-5">
                                <div className="mr-3"><BsArrowRight /></div>
                                <div>Explore our business verticals</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business;