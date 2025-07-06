import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { languages } from "../languageData";
import { useRef } from "react";

const TranslatorApp = () => {

    const [langone, setLangone] = useState("en");
    const [langtwo, setLangtwo] = useState("en");
    const [showLang, setShowlan] = useState(false);
    const [currentLang, setCurrentLang] = useState(null);
    const [inputtext, setInputtext] = useState("");
    const [translate, setTranslate] = useState("")
    const[charcout,setCharcout]=useState(0);
    const maxchars =200;


    const Handleclick = (type) => {
        setCurrentLang(type);
        setShowlan(true);
    }

    const handleSelect = (langcode) => {
        if (currentLang === 'from') {
            setLangone(langcode)
        }
        else {
            setLangtwo(langcode)
        }
        setShowlan(false)
    }

    const handleSwap = () => {
        setLangone(setLangtwo)
        setLangtwo(setLangone)
    }
    const handleTranslate = async () => {
        if (!inputtext.trim()) {
            setTranslate("");
            return
        }
        const data = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputtext)}&langpair=${langone}|${langtwo}`)
        const res = await data.json();
        setTranslate(res.responseData.translatedText)
    }
    const handleInputchange = (e) => {
        const value = e.target.value
        if(value.length<=maxchars){
            setInputtext(value)
            setCharcout(value.length)
        }
        
    }

    const handlekeyDown = (e)=>{
        if(e.key === 'Enter'){
            handleTranslate()
        }
    }

    const dropdownref = useRef(null)

    const handledropdown = (e)=>{
        if(dropdownref.current && !dropdownref.current.contains(e.target)){
            setShowlan(false)
        }
    
    }
    useEffect(()=>{
        if(showLang){
            document.addEventListener('mousedown',handledropdown)
        }
        else{
            document.removeEventListener('mousedown',handledropdown)
        }
        return ()=>{
            document.removeEventListener('mousedown',handledropdown)
        }
    },[showLang])



    return (
        <>
            <div className="w-full flex flex-col gap-y-4 justify-center items-center px-6 sm:px-8 pt-12 pb-6 relative">
                <Link to="/">
                    <button className="absolute top-4 right-4"><i className="fa-solid fa-xmark text-xl text-gray-300"></i></button>
                </Link>
                <div className="w-full min-h-20 flex justify-center items-center px-4 bg-gradient-to-r from-[#85dec0] to-[#477089] text-gray-700 rounded-lg">
                    <div className="language" onClick={() => {
                        Handleclick('from')
                    }}>{languages[langone] || "English"}</div>
                    <i onClick={handleSwap} className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"></i>
                    <div className="language" onClick={() => {
                        Handleclick('to')
                    }}>{languages[langtwo] || "English"}</div>
                </div>
                {
                    showLang && (
                        <div ref={dropdownref} className="w-[calc(100%-4rem)] h-[calc(100%-9rem)] bg-gradient-to-r from-[#b6f492] to-[#338b93] absolute top-32 left-8 z-10 rounded shadow-lg p-4 overflow-y-scroll">
                            <ul>
                                {
                                    Object.entries(languages).map(([code, name]) => {
                                        return (
                                            <li onClick={() => {
                                                handleSelect(code)
                                            }} className="cursor-pointer hover:bg-[#10646b] transition duration-200 p-2 rounded" key={code}>{name}</li>
                                        )

                                    })
                                }
                            </ul>

                        </div>
                    )

                }
                <div className="w-full relative ">
                    <textarea value={inputtext || ""} onKeyDown={handlekeyDown} onChange={handleInputchange} className="textareas text-gray-200"></textarea>
                    <div className="absolute bottom-2 right-4 text-gray-400">{charcout}/{maxchars}</div>
                </div>
                <button onClick={handleTranslate}  className="w-12 h-12 bg-gradient-to-r from-[#85dec0] to-[#477089] rounded-full tex-2xl tex-gray-600 flex justify-center items-center active:translate-y-[1px]">
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
                <div className="w-full">
                    <textarea value={translate || " "} readOnly className="textareas text-[#b6f492]"></textarea>

                </div>
            </div>

        </>
    )
}

export default TranslatorApp