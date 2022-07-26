import { data } from "../Components/Media_Data"

const Media = () => {
    return (
        <div className="h-screen w-full bg-white">
            <div className="m-8 text-3xl font-bold text-center">
                Media
            </div>
            <div className="m-8">
                <div className="grid justify-items-center lg:grid-cols-5 md:grid-cols-4 grid-cols-1">
                    {data.map((item) => (
                        <div className="hover:shadow-2xl hover:scale-110 ease-in-out duration-1000 mt-5 border-x-2 border-b-2 border-slate-100">
                            <img className="rounded-t-lg w-[200px] h-[200px]" src={item.img} alt=""></img>
                            <text className="text-center m-3 p-3 text-xs">{item.Description}</text>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Media;