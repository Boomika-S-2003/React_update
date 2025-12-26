import { useState } from "react"

const Recipi=()=>{

    const [getrecipi,setGetrecipi]=useState([])
    
    const show_recipies=async()=>{

        const fromapi=await fetch('https://dummyjson.com/recipes')

        const recipies=await fromapi.json()
        
        setGetrecipi(recipies.recipes)
        
    }


    return(
        <div className="bg-gray-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 rounded">
            {getrecipi.map((e)=>(<div className='bg-blue-500 text-white p-2' key={e.id}>
                <img src={e.image}/> 
                <h1>recipi name:{e.name}</h1>
                <p>ingredients:{e.ingredients}</p>
                <button className="bg-red-800 p-2 rounded-2xl mt-4">Read more</button>
        </div>
        )) }

       <div><button onClick={show_recipies} className="bg-red-800 text-white p-2 rounded-2xl mt-4">Show recipies</button>
</div> 

        </div>

    )
}
export default Recipi