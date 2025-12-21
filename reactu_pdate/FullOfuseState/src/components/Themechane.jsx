import {useState} from 'react'
import Hide_show from './Hide_show'

const Themechane=()=>{

    const [colorchange,setColorchange]=useState(true)

    const themeChange=()=>{
        setColorchange(!colorchange)
    }

    return(
        <div>
        <div className={colorchange?"bg-blue-400 flex justify-between p-3":"bg-blue-950 flex justify-between p-3"}>
            <div>
                Logo
            </div>
            <div className="flex gap-5">
                <a href="/home">Home</a>
                <a href="/home">about</a>
                <a href="/home">contact</a>
            </div>
                <button onClick={themeChange} className={colorchange?'bg-amber-50 text-black w-30':'bg-black text-white w-30'}>{colorchange?'dark':'light'}</button>
        </div>
        <div>
        <Hide_show data={colorchange}/> 
        </div>   
        </div>
        
    )
}

export default Themechane