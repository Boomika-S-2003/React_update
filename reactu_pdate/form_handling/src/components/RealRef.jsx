import { useEffect, useRef } from "react"

const RealRef=()=>{

const myref=useRef('')

useEffect(()=>{
    const getdata=localStorage.getItem('user')
    if(getdata){
        myref.current.value=getdata
    }

})

 const handlechange=()=>{
     const data=myref.current.value
     localStorage.setItem('user',data)

 }



    return(
    <form >
        <label >User Name:   </label>
        <input type="text" ref={myref} onChange={handlechange} className="bg-gray-200 border-2" placeholder="enter the usr name"/>
    </form>
    )
}

export default RealRef