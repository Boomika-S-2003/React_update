import { useContext } from "react"
import { Countercontext } from "../context/Contercontext"
import { Themecontext } from "../context/Themecontext"

const Navbar=()=>{

    // const{theme,changetheme}=useContext(Countercontext)
    // console.log(changetheme);
    // console.log(theme);
    const {themes,Changedtheme}=useContext(Themecontext)
    
    
    

    return(
        // <div className="flex justify-between">
        //     <div>
        //         logo
        //     </div>

        //     <div className="flex gap-3">
        //         <a>{theme?'light':'dark'}</a>
        //         <button onClick={changetheme}>click</button>
                
                
        //     </div>
        // </div>

        <div className={themes?"bg-amber-900 h-8 flex justify-between":"bg-amber-200 h-8 flex justify-between"}>
            <div>
                logo
            </div>

            <div className="flex gap-3">
                <a>{themes?'light':'dark'}</a>
                <button onClick={Changedtheme}>click</button>
                
                
            </div>
        </div>

    )
}
export default Navbar