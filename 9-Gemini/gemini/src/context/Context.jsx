import run from "../config/gemini";

import { createContext, useState } from "react";

export const Context=createContext()

const ContextProvider = ({children})=>{

    const [input,setinput]=useState("")
    const [resentprompt,setresentprompt]=useState("")
    const [preprompt,setpreprompt]=useState("")
    const [showresult,setshowresult]=useState(false)
    const [loading,setloading]=useState(false)
    const [result,setresult]=useState("")

    const onsent=async(prompt)=>{
        setresult("")
        setloading(true)
        setshowresult(true)
        setresentprompt(input)
        const response= await run(input)
        setresult(response)
        setloading(false)
        setinput("")
    }
    const contextvalue={
        input,
        setinput,
        resentprompt,
        setresentprompt,
        preprompt,
        setpreprompt,
        showresult,
        loading,
        result,
        setresult,
        onsent
    }
    return(
        <Context.Provider value={contextvalue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

