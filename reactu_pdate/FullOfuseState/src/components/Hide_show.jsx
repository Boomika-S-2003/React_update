import { useState } from "react"

 const Hide_show=({data})=>{

     const[hideshow,setHideshow]=useState(true)

     const hideshowing=()=>{
        setHideshow(!hideshow)     }

     const [boxrnd,setBoxrnd]=useState(true)
      const boxRound=()=>{
        setBoxrnd(!boxrnd)

    }

   

    return(
        
         
            /* {hideshow?<div className="bg-amber-700 text-white flex w-40 h-40 justify-center items-center">
              Box
           </div>:''}}

            <div className={hideshow?'bg-amber-700 text-white flex w-40 h-40 justify-center items-center':'bg-amber-500 text-white flex w-40 h-40 justify-center items-center'}>
            {hideshow?'greenbox':'redbox'}
         </div>

        
         { <button onClick={hideshowing} className={hideshow?"bg-amber-700 p-1 text-white rounded-2xl w-20":'bg-amber-200 text-black p-1 rounded-2xl'}>{hideshow?'hide':'show'}</button>
         } */


// task

<div className={data?'bg-blue-400 ':'bg-amber-950'}>

     <div >
            <div className="flex flex-col justify-center  items-center">
                {hideshow?'':'here showing-I am the text while you click the btn '}
            <button onClick={hideshowing} className={hideshow?"bg-amber-700 p-1 text-white rounded-2xl w-20":'bg-amber-200 text-black p-1 rounded-2xl'}>{hideshow?'show':'hide'}</button>
            </div>
        </div>

        
            <div className="flex flex-col items-center gap-3">
               {boxrnd?<div className="bg-green-400 text-white text-center p-10 rounded-full w-40 h-40">this is round</div>:<div className="bg-red-500 text-white text-center p-10  w-40 h-40">this is Box</div>}
                
                <button onClick={boxRound} className={boxrnd?"bg-black w-35 text-white rounded-2xl":"bg-gray-600 w-35 text-black rounded-2xl"}>{boxrnd?'showbox':'show round'}</button>
            </div>
        
        
</div>

       

    )
}
export default Hide_show