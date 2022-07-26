import React from "react";

const Card = (props) => {
    return (
        <div class="rounded-xl flex flex-col md:flex-row backdrop-blur-sm hover:shadow-black/50 hover:shadow-xl m-5">
            <div className="basis-1/2">
                <img class=" h-full w-full rounded-xl" src={props.image} alt="" />
            </div>
            <div className="basis-1/2">
                <div>
                    <h3 className="text-left mt-5 text-xl font-bold underline hover:underline-offset-8 m-8 cursor-pointer">John Kray</h3>
                </div>
                <div className="m-8 text-left">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
        </div>
    );
}

export default Card;