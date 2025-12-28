import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Fetchapi=()=>{

    const[user,setUser]=useState([])

    const userdata=async()=>{

        const getdata=await fetch('https://dummyjson.com/users')

        console.log(getdata);
        

        const datas=await getdata.json()

        setUser(datas.users)
        

    }

     useEffect(()=>{
       userdata()
       
  },[])


  
    

    return(
    <div className="bg-amber-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2">
       {user.map((e)=>(
        <div className="bg-orange-400 p-2 gap-3 m-3 wrap-anywhere rounded-3xl" key={e.id}>
            <div >firstName:{e.firstName}</div>
            <div>lastName:{e.lastName}</div>
            <div>age:{e.age}</div>
            <div>gender:{e.gender}</div>
            <div>email:{e.email}</div>
            <div>phone:{e.phone}</div>
            <Link to='/Showusers' state={{user:e}} className="bg-white rounded-3xl text-center ml-15 p-1 text-black mt-3">read more</Link>
            
        </div>



       ))} 


    </div>
    )
}
export default Fetchapi