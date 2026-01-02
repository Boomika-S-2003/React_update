import { useEffect, useRef, useState } from "react"

const Ref =()=>{

    const myref=useRef()
    const textref=useRef()
    const clickref=useRef()
    const[isred,setIsred]=useState(false)    

    const handleclick=()=>{
        if(!isred){
        textref.current.style.color='black'
        clickref.current.style.backgroundColor='red'
        clickref.current.style.color='white'
        myref.current.style.backgroundColor='gray'}
        else{
             myref.current.style.backgroundColor='pink'
              textref.current.style.color='white'
              clickref.current.style.backgroundColor='green'
        }
        setIsred(!isred)

    }
    

    return(
        <div ref={myref}>
            <h1 ref={textref}>this is ref process</h1>
            <button onClick={handleclick} ref={clickref}>click me for color change </button>
        </div>
    )
}
export default Ref