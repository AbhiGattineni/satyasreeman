import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

function Cards() {
    return (
        <div>
            <div class="grid lg:grid-cols-2 md:grid-col-2 grid-col-1 m-5">
                <div class="rounded-xl flex flex-col lg:flex-row md:flex-row backdrop-blur-sm hover:shadow-black/50 hover:shadow-xl m-5">
                    <div className="basis-1/2">
                        <img class=" h-full w-full rounded-xl" src={image1} alt="" />
                    </div>
                    <div className="basis-1/2">
                        <div>
                            <h3 className="text-center mt-5 text-xl font-bold underline underline-offset-8 m-3">John Kray</h3>
                        </div>
                        <div className="m-8 text-center">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-xl flex flex-col lg:flex-row md:flex-row backdrop-blur-sm hover:shadow-black/50 hover:shadow-xl m-5">
                    <div className="basis-1/2">
                        <img class=" h-full w-full rounded-xl" src={image2} alt="" />
                    </div>
                    <div className="basis-1/2">
                        <div>
                            <h3 className="text-center mt-5 text-xl font-bold underline underline-offset-8">John Kray</h3>
                        </div>
                        <div className="m-8 text-center">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;