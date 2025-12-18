import {useState} from 'react'

const StateFunction=()=>{
    console.log('rerender');
   
    const [count,setCount]=useState(0)

    const theNum=()=>{
        
        setCount(count+1)
    }

  const[data,setData]=useState('boo')
    const valueSub=(s)=>{
        s.preventDefault()    

        setData(data+'q')

}
   
   
    return(
        <>
        <div className="bg-amber-700 h-40 mt-2 flex flex-col items-center justify-center">
            <h1 className="text-white text-2xl font-bold">
                State Function Process
            </h1>
            <h1 className='text-white font-black text-3xl'>{count}</h1>
            <div>
                <button onClick={theNum} className='bg-amber-50 rounded-2xl p-1 m-3'>
                    click me
                </button>
            </div>
        </div>
        
         <div className="bg-amber-500 h-40 mt-2 flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl">
            Interaction-OnSubmit-process
            </h1>
        
            <form onSubmit={valueSub}>
                <input type="text" name='username' placeholder={data} className="bg-white p-2 text-center m-3 "/>
                <input  type="submit" name='submit' value='submit' className="bg-white p-2 text-center m-3 rounded-2xl"/>
                </form>
        </div>  
        </>
    )
}
export default StateFunction