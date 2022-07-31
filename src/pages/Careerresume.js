import React from "react";

const Careerresume = () => {
    return (
        <form className="bg-white m-5 border border-radius-2 rounded-lg">
            <div className="text-xl font-bold text-center m-3">
                Forward your resume
            </div>
            <div className="flex justify-center px-8 p-3">
                <div className="relative">
                    <input type="text" id="username" className="border-b py-1 pr-20 focus:outline-none focus:border-black focus:border-b-2 transition-colors peer" autoComplete="off"></input>
                    <label for="username" className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all">Name *</label>
                </div>
            </div>
            <div className="flex justify-center px-8 p-3">
                <div className="relative">
                    <input type="number" id="username" className="border-b py-1 pr-20 focus:outline-none focus:border-black focus:border-b-2 transition-colors peer" autoComplete="off"></input>
                    <label for="username" className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all">Phone *</label>
                </div>
            </div>
            <div className="flex justify-center px-8 p-3">
                <div className="relative">
                    <input type="email" id="username" className="border-b py-1 pr-20 focus:outline-none focus:border-black focus:border-b-2 transition-colors peer" autoComplete="off"></input>
                    <label for="username" className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all">E-mail *</label>
                </div>
            </div>
            <div className="flex justify-center px-8 p-3">
                <div className="relative">
                    <input type="text" id="username" className="border-b py-1 pr-20 focus:outline-none focus:border-black focus:border-b-2 transition-colors peer" autoComplete="off"></input>
                    <label for="username" className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all">City *</label>
                </div>
            </div>
            <div className="flex justify-center px-8 p-2">
                <label>Resume *</label>
                <input type="file"></input>
            </div>
            <div class="flex justify-center py-8">
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
            </div>
        </form>
    )
}
export default Careerresume;