import { data } from "../Components/Media_Data";

const Media = () => {
    return (
        <div className="w-full bg-white">
            <div className="md:grid md:grid-rows-4">
                <div className="md:row-span-1 flex justify-center items-center">
                    <div className="text-3xl font-bold">
                        Media.
                    </div>
                </div>
                <div className="md:row-span-3 md:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-items-center">
                    {data.map((item) => (
                        <div>
                            <img className="w-[200px] h-[200px] hover:shadow-2xl hover:scale-110 ease-in-out duration-300" src={item.img} alt=""></img>
                            <p className="ml-12 py-3">{item.Description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Media;