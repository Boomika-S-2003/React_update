import { useState } from "react"
import { useLocation } from "react-router-dom"

const Bakes=()=>{

    const[cake]=useState([{id:1,cakeName:'choculate',price:30},
        {id:2,cakeName:'strawberry',price:123},{id:3,cakeName:'vennila',price:335}])

        const Location=useLocation()

        const upscake=Location.state.upcake

    return(

        <div>
            <div>{upscake.id}</div>
            <div>variety:{upscake.cakeName}</div>
            <div>price:{upscake.price}</div>
            
        </div>

    )
}

export default Bakes