
import React from "react"
import { Link } from "react-router-dom"
const TranslatorStart = () => {
    return (
        <>
            <div className=" w-full h-full flex flex-col justify-center items-center p-6 sm:p-12">
                <div className=" w-full h-64 bg-gradient-to-l from-[#85dec0] to-[#477089] rounded-t-full rounded-bl-full  flex flex-col justify-center text-gray-700 pr-6">
                    <span className="font-shojumaru text-5xl sm:text-6xl text-center">Hello</span>
                    <span className="text-2xl sm:text-3xl text-center ">வணக்கம்</span>
                    <span className="font-nosoSansJp text-3xl sm:text-4xl text-right">ഹലോ</span>
                    <span className="text-2xl sm:text-3xl text-right">नमस्ते</span>
                </div>
                <div className="w-full text-right space-y-5 mt-20 mb-36">
                    <h1 className="font-righteous text-4xl text-white uppercase">Translator App</h1>
                    <Link to="/trans">
                    <button className="w-32 h-10 bg-gradient-to-r from-[#85dec0] to-[#477089] rounded-full font-bold font-righteous text-lg uppercase text-gray-700 tracking-widest active:translate-y-[1px] cursor-pointer ">Start</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TranslatorStart