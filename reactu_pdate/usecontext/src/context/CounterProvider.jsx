import { useState } from "react"
import { Countercontext } from "./Contercontext"

const CounterProvider=({children})=>{
    
    const [count,setCount]=useState(0)
    const [theme,setTheme]=useState(false)

    const changetheme=()=>{
        setTheme(!theme)
    }

    const addcart=()=>{
        setCount(count+1)
    }


    return(
        <Countercontext.Provider value={{count,addcart,changetheme,theme}}>
            {children}
        </Countercontext.Provider>        
    )
}
export default CounterProvider