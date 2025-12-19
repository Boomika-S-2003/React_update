import { useState } from "react";
import Presentational from '../pages/presentational'

const Container=()=>{

    const[count,setCount]=useState(0)

    const increment=()=>{
        setCount(count+1)
    } 

    const decrement=()=>{
        setCount(count-1)
    }


    return(
        <div>
        <Presentational total={count} add={increment} sub={decrement}/>

        </div>
    )
}
export default Container