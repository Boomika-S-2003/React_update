import { useState } from "react"
import { Link } from "react-router-dom"

const ShowBakes=()=>{

    const[cake]=useState([{id:1,cakeName:'choculate',price:30},
        {id:2,cakeName:'strawberry',price:123},{id:3,cakeName:'vennila',price:335}])

    return(

        <div>
            {cake.map((e)=>(
                <div key={e.id}>
                <div>{e.id}</div>
                <div>variety:{e.cakeName}</div>
                <div>price:{e.price}</div>
                <Link to='/cake'  state={{upcake:e}}>click me more</Link>
                </div>

            ))}
        </div>

    )
}

export default ShowBakes