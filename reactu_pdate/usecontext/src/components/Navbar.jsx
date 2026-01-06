import { useContext } from "react"
import { Countercontext } from "../context/Contercontext"

const Navbar=()=>{

    const{theme,changetheme}=useContext(Countercontext)
    console.log(changetheme);
    console.log(theme);
    
    
    

    return(
        <div className="flex justify-between">
            <div>
                logo
            </div>

            <div className="flex gap-3">
                <a>{theme?'light':'dark'}</a>
                <button onClick={changetheme}>click</button>
                
                
            </div>
        </div>

    )
}
export default Navbar