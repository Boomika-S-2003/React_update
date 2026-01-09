
const Input=({hocValue,text})=>{


    

    const hndlemulty=(e)=>{
        e.preventDefault()
        if (hocValue){
            console.log(hocValue(e.target.value))}
    }

    return(
        <form>

            <label>{text}:    </label>
            <input className ="bg-gray-300" type="text" onChange={hndlemulty} />

            
            <label>{text}:    </label>
            <input className ="bg-gray-300" type="text" onChange={hndlemulty} />
        </form>
    )
}

export default Input