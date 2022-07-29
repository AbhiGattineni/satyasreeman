import { data } from "../Components/Media_Data";

const Media = () => {
    return (
        <div className="w-full bg-white">
            <div className="text-3xl font-bold text-center">
                Media
            </div>
            <div className="border border-spacing-2 rounded-md m-8 bg-slate-100 p-5">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-items-center">
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