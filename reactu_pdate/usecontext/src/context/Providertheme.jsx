import { useState } from "react"
import { Themecontext } from "./Themecontext"

const Providertheme=({children})=>{

    const[themes,setThemes]=useState(true)

    const Changedtheme=()=>{
        setThemes(!themes)
    }

    return<>
    <Themecontext.Provider value={{themes,Changedtheme}}>
        {children}
    </Themecontext.Provider>
    </>
}
export default Providertheme