
import { BsArrowRight } from "react-icons/bs";

const Business = () => {
    return (
        <div className="w-full bg-slate-100">
            <div className="md:grid md:grid-cols-3">
                <div className="row-span-1 md:col-span-1 md:h-screen flex justify-center items-center">
                    <div className="text-3xl font-bold">
                        Business.
                    </div>
                </div>
                <div className="row-span-2 md:col-span-2  m-5 flex justify-center items-center">
                    <div class="grid grid-rows">
                        <div className="mt-5">
                            Established in 1897, the Godrej Group has its roots in India's Independence and Swadeshi movement. Our founder, Ardeshir Godrej, lawyer-turned-serial entrepreneur failed with a few ventures, before he struck gold with a locks business.
                        </div>
                        <div className="mt-5">
                            Today, we enjoy the patronage of 1.1 billion consumers globally across consumer goods, real estate, appliances, agriculture and many other businesses. In fact, our geographical footprint extends beyond Earth, with our engines now powering many of India's space missions.
                        </div>
                        <div className="mt-5">
                            With a revenue of over USD 4.1 billion we are growing fast, and have exciting, ambitious aspirations.
                        </div>
                        <div className="mt-5">
                            But for us, it is most important that besides our strong financial performance and innovative, much-loved products, we remain a good company. Approximately 23 per cent of the promoter holding in the Godrej Group is held in trusts that invest in the environment, health and education. We are also bringing together our passion and purpose to make a difference through our Good & Green strategy of 'shared value' to create a more inclusive and greener India.
                        </div>
                        <div className="mt-5">
                            At the heart of all of this, is our people. We take much pride in fostering an inspiring workplace, with an agile and high-performance culture. We are also deeply committed to recognising and valuing diversity across our teams.
                        </div>
                        <div className="flex flex-row items-center text-rose-800 font-bold mt-5">
                            <div className="mr-3"><BsArrowRight /></div>
                            <div>Explore our business verticals</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Business;