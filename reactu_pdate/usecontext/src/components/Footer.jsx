import { useContext } from "react"
import { Themecontext } from "../context/Themecontext"

const Footer=()=>{

    const{themes}=useContext(Themecontext)

    return(
        <div className= {themes?"bg-amber-900 mt-10 h-30":"bg-amber-200 mt-10 h-30"}>
            Footer  

        </div>       
    )
}

export default Footer