import { useState } from "react"
import { useParams } from "react-router-dom"

const Show=()=>{

     const [line]=useState([{id:1,oneline:'this is the info of family',about:'friends'},
        {id:2,oneline:'this is the info of family',about:'friends'},
        {id:3,oneline:'this is the info of family',about:'friends'}])
 
     const {id}=useParams()

     const showline=line.find((items)=>items.id===Number(id))
 
     return(

        <div>
            <h1>{showline.oneline}</h1>
            <h1>{showline.about}</h1>
        </div>
        

    )
}
export default Show