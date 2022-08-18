import { data } from "../Components/Media_Data";

const Media = ({ refer }) => {
    return (
        <div className="container mx-auto bg-white" ref={refer} id="media">
            <div className="md:grid md:grid-rows-4">
                <div className="md:row-span-1 flex justify-center items-center">
                    <div className="text-3xl font-bold">
                        Media.
                    </div>
                </div>
                <div className="md:row-span-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center">
                    {data.map((item) => (
                        <div className="m-5">
                            <img className="hover:shadow-2xl hover:scale-110 duration-300" src={item.img} alt=""></img>
                            <p className="py-3 text-center">{item.Description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Media;