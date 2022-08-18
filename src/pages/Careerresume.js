import React from "react";

const Careerresume = (props) => {
    return (
        <form className="bg-white border border-radius-2 border-rose-800 rounded-lg m-3">
            <div className="text-xl font-bold text-center m-3">
                {props.tag}
            </div>
            <div className="flex justify-center px-8 p-3">
                <div className="relative">
                    <input type="text" id="username" className="border-b w-2/3 py-1 pr-20 focus:outline-none focus:border-rose-800 border-rose-700 focus:border-b-2 transition-colors peer" autoComplete="off"></input>
                    <label for="username" className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all">Name *</label>
                </div>
            </div>
            <div className="flex justify-center px-8 p-3">
                <div className="relative">
                    <input type="tel" id="username" className="border-b w-2/3 py-1 pr-20 focus:outline-none focus:border-rose-800 border-rose-700 focus:border-b-2 transition-colors peer" autoComplete="off"></input>
                    <label for="username" className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all">Phone *</label>
                </div>
            </div>
            <div className="flex justify-center px-8 p-3">
                <div className="relative">
                    <input type="email" id="username" className="border-b w-2/3 py-1 pr-20 focus:outline-none focus:border-rose-800 border-rose-700 focus:border-b-2 transition-colors peer" autoComplete="off"></input>
                    <label for="username" className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all">E-mail *</label>
                </div>
            </div>
            <div className="flex justify-center px-8 p-3">
                <div className="relative">
                    <input type="text" id="username" className="border-b w-2/3 py-1 pr-20 focus:outline-none focus:border-rose-800 border-rose-700 focus:border-b-2 transition-colors peer" autoComplete="off"></input>
                    <label for="username" className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all">City *</label>
                </div>
            </div>
            {props.tag === 'Write To Us' ?
                <div className="flex justify-center px-8 p-3">
                    <div className="relative">
                        <input type="text" id="message" className="border-b w-2/3 py-1 pr-20 focus:outline-none focus:border-rose-800 border-rose-700 focus:border-b-2 transition-colors peer" autoComplete="off"></input>
                        <label for="message" className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all">Message*</label>
                    </div>
                </div>
                :
                <div className="flex justify-center px-8 p-2">
                    <label>Resume*</label>
                    <input type="file"></input>
                </div>
            }
            <div class="flex justify-center py-8">
                <button type="button" class="inline-block px-6 py-2.5 bg-rose-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
            </div>
        </form>
    )
}
export default Careerresume;