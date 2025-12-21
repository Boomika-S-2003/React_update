const Present_apti=({quns})=>{
    return(
        <div className='bg-gray-400 flex justify-between p-7'>
            
        {quns.map((e)=>(
                <div className="bg-blue-500 p-2 w-80 rounded-2xl text-white h-40" key={e.id} >
                    <h1>{e.id}.{e.Quetion}</h1>
                    <p>{e.Options}</p>
                </div>
            ))}
        </div>
    )
}
export default Present_apti