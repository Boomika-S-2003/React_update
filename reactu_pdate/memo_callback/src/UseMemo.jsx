// Normally its run all the function and theme even
//  i click onchange also its rendering everything
// this is the exmple without useMemo


// import { useState } from "react"

// const UseMemo =()=>{
//     console.log('compo running');
    

// const[theme,setTheme]=useState(true)
// const [num,setNum]=useState(0)

// const onclick=()=>{
//     console.log('theme run');
    
//     setTheme(!theme)
// }

// const takeVlaue=(e)=>{
// setNum(Number(e.target.value))
// }


// const timefun=()=>{
//     for(let i=0;i<10;i++){console.log('function running');
//     }
//         return num+3
    
// }

// const ThribleNum=timefun()


//     return(
//         <div>
//             <h1 className={theme?"bg-red-500 text-white":"bg-amber-50 text-red-500"}>UseMomo</h1>
//             <h1>{theme?"yes this is red":"no its white"}</h1>
//             <div>
//             <input type="number" className="bg-gray-200 border-2" onChange={takeVlaue} />
//             </div>
//             <button className="bg-black mt-5 text-white rounded-2xl p-2" onClick={onclick}>click</button>
//         <h1>{ThribleNum}</h1>
        
//         </div>
        
//     )
// }
// export default UseMemo


// this is the eg with useMemo  its control the rerender
//  which part we need to rerender 10 or 1000 times that one 
// component only rerender



import { useMemo, useState } from "react"

const UseMemo =()=>{
    console.log('compo running');
    

const[theme,setTheme]=useState(true)
const [num,setNum]=useState(0)

const onclick=()=>{
    console.log('theme run');
    
    setTheme(!theme)
}

const takeVlaue=(e)=>{
setNum(Number(e.target.value))
}


const timefun=()=>{
    for(let i=0;i<10;i++){console.log('function running');
    }
        return num+3
    
}

const ThribleNum=useMemo(()=>{

    console.log("memo running");
    
    return timefun(num)

},[num])


    return(
        <div>
            <h1 className={theme?"bg-red-500 text-white":"bg-amber-50 text-red-500"}>UseMomo</h1>
            <h1>{theme?"yes this is red":"no its white"}</h1>
            <div>
            <input type="number" className="bg-gray-200 border-2" onChange={takeVlaue} />
            </div>
            <button className="bg-black mt-5 text-white rounded-2xl p-2" onClick={onclick}>click</button>
        <h1>{ThribleNum}</h1>
        
        </div>
        
    )
}
export default UseMemo