import { useResolvedPath } from "react-router-dom";

const Interaction=()=>{

    let count=0

    const click=()=>{
        count++
        console.log(count);
        
    }

    
//     let Data='a'

//     const userData=(s)=>{
//   Data=Data+'b'
//       s.preventDefault()
        
//     alert(Data);
        
    

    const getdata=(s)=>{
     
      s.preventDefault()
        
        alert(s.target.value);
        
        
    }
return(
        <>
        <div onClick={click} className="bg-amber-500 h-40 mt-2 flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl">
            Interaction-Onclick-process
            </h1>
            <div className="text-white font-extrabold text-2xl">
                count
            </div>
            <div>
                <button className="bg-white p-1 rounded-2xl w-20">
                    click me
                </button>
            </div>
        </div>

        {/* <div className="bg-amber-600 h-40 mt-2 flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl">
            Interaction-OnSubmit-process
            </h1>
            <form onSubmit={userData}>
                <input type="text" name='username' placeholder="Enter the name" className="bg-white p-2 text-center m-3 "/>
                <input  type="submit" name='submit' value='submit' className="bg-white p-2 text-center m-3 rounded-2xl"/>
                </form>
        </div>  */}
        
        
        <div className="bg-amber-700 h-40 mt-2 flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl">
            Interaction-OnChange-process
            </h1>
            <form >
                <input onChange={getdata} type="text" name='username' placeholder="Enter the name" className="bg-white p-2 text-center m-3 "/>
                <input  type="submit" name='submit' value='submit' className="bg-white p-2 text-center m-3 rounded-2xl"/>
                </form>
        </div>


        
</>
    )
}
export default Interaction