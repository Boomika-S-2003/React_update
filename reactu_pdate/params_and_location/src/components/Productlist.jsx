import { useState } from "react"
import { useParams } from "react-router-dom"

const Productlist=()=>{

    const [course]=useState([{id:1,course:'react',fees:10000,time:'10-2'},{id:2,course:'node',fees:2000,time:'5-6'},{id:3,course:'html',fees:2345,time:'7-8'}])

    const {id}=useParams()

    const setcourse=course.find((items)=>items.id===Number(id))

    return(
        <>
        <div>{setcourse.course}</div>
        <div>{setcourse.fees}</div>
        <button className="bg-black tect-white">buynow</button>
        </>

    )
}
export default Productlist