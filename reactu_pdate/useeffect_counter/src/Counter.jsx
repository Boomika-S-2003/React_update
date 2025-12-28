import { useEffect,useState } from "react"

const Counter=()=>{

    const [time,setTime]=useState (0)

    const showtimer=()=>{

        const crttime=setInterval(()=>{

            setTime(prev=>prev+1)

        },1000)

        return()=>clearInterval(crttime)

    }

    useEffect(()=>{
       showtimer() 
    },[])

    return(
        <div className="bg-red-400 font-bold text-white text-center w-20 flex items-center justify-center p-3 rounded-full m-5">
        {time}
        </div>
    )
}
export default Counter