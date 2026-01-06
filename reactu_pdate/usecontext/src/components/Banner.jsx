import { useContext } from "react"
import { Countercontext } from "../context/Contercontext"

const Banner=()=>{

        const{count}=useContext(Countercontext)
        const{addcart}=useContext(Countercontext)

    return(
        <>
        <h1>Add to cart</h1>
        <div>{count}</div>
        <button onClick={addcart}>add to cart</button>
        </>

    )
}
export default Banner