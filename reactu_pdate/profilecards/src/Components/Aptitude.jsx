import { useState } from "react"
import Present_apti from './Present_apti'

const Aptitude=()=>{

     const [quetion]=useState([{id:1,Quetion:'1.If 10 printers print 10 models in 10 mins how long for 100 printers to print 100 models?',Options:' (A) 10 mins (B) 100 mins (C) 1 min (D) 20 mins'},
        {id:2,Quetion:'A train crosses a pole in 15 seconds and a platform 100m long in 25 seconds. Find the length of the train.' ,Options: '100m, 150m, 200m, 250m'},
        {id:3,Quetion:'A shopkeeper marks his goods 40% above cost price and offers a 20% discount. What is his profit %?',Options: '12%, 20%, 28%, 30%'}

     ])


    return(
        <div>
            <Present_apti quns={quetion}/>
            
        </div>
    )
}
export default Aptitude