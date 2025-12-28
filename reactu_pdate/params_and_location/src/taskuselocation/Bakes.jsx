
import { useLocation } from "react-router-dom"

const Bakes=()=>{

   

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