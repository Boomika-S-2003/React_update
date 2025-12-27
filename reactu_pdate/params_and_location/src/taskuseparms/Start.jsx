import { useState } from "react"
import { Link } from "react-router-dom"


const Start=()=>{

    const [line]=useState([{id:1,oneline:'this is the info of family',about:'friends'},
        {id:2,oneline:'this is the info of family',about:'friends'},
        {id:3,oneline:'this is the info of family',about:'friends'}])

    return(
        <div>
            {line.map((e)=>(
            <div key={e.id}>
                <h1>{e.oneline}</h1>
                <h1>{e.about}</h1>
                <Link to={`/line/${e.id}`}>read more</Link>
            </div>
            

            ))}
           

        </div>
    )
}
export default Start