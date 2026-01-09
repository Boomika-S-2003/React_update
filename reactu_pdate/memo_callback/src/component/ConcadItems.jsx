import { useEffect, useState } from "react"

const ConcadItems=({concades})=>{
    const[list,setList]=useState([])

    useEffect(()=>{

setList(concades)
    },[concades])


    return(
        <div>
           { list.map((e,i)=>(
            <h1 key={i}>{e}</h1>

            ))}
            
            
        </div>
    )
}
export default ConcadItems