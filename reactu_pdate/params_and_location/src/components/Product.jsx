import { useState } from "react"
import { Link } from "react-router-dom"


const Product =()=>{

    const [course]=useState([{id:1,course:'react',fees:10000,time:'10-2'},{id:2,course:'node',fees:2000,time:'5-6'},{id:3,course:'html',fees:2345,time:'7-8'}])

    

    return(
        <div className="bg-red-400 p-5 flex gap-5">
            {course.map((e)=>(
            <div className="bg-orange-400 text-white p-1 w-30"key={e.id}>
            <div>course:{e.course}</div>
            <h1>fees:{e.fees}</h1>
            <h2>time:{e.time}</h2>
            <Link to= {`/course/${e.id}`}className="bg-white text-black rounded p-1 mt-3">buy now</Link>
            </div>

            ))}
            
        </div>

    )
}
export default Product