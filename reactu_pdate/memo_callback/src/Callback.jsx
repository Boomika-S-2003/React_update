import { useCallback, useState } from "react"
import ConcadItems from "./component/ConcadItems"

const Callback=()=>{

    const [theme,setTheme]=useState(true)
    const [num,setNum]=useState(0)


    const changeTheme=()=>{
        setTheme(!theme)
    }
    
const concad=(e)=>{
    setNum(e.target.value)
}

const concadNum=useCallback(()=>{
    return [num+4,num+5,num+6]
},[num])



    return(
        <div>
            <h1>useCallback</h1>
            <h1>{theme?'boomika':'muthu'}</h1>
            <button className="bg-amber-200 rounde p-3" onClick={changeTheme}>click me</button>
            <div><input className="bg-gray-300" type="number"  onChange={concad}/></div>
            <ConcadItems concades={concadNum}/>
        </div>
    )
}
export default Callback