import { useEffect, useState } from "react";

const Stoptime=()=>{

    const [time,setTime]=useState(0)

    const showtime=()=>{

        const crttime=setInterval(() => {

            setTime(prev=>(prev<10?prev+1:0))

            
            
        }, 1000);

         return()=>clearInterval(crttime)
    }

    useEffect(()=>{
        showtime()

    },[])


    return(

        <div className='bg-blue-700 font-bold text-white text-center w-20 flex items-center justify-center p-3 rounded-full m-5'>
            {time}
        </div>
        
    )
}

export default Stoptime