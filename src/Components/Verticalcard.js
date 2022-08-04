import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Verticalcard = (props) => {
    return (
        <div className="grid grid-rows-2 rounded-xl bg-slate-50 backdrop-blur-sm hover:bg-slate-50 hover:shadow-black/50 hover:shadow-xl m-5 border border-radius-2">
            <div className="row-span-1">
                <img className="rounded-t-lg" src={props.image} alt="" />
            </div>
            <div className="row-span-1">
                <div>
                    <h3 className="text-left mt-5 text-xl font-bold m-5">{props.tag}</h3>
                </div>
                <div className="m-5 text-left">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className="flex flex-row items-center font-medium mt-5 ">
                        <div>Read More</div>
                        <div className="ml-3 text-rose-800 "><BsArrowRight /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Verticalcard;