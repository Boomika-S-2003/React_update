import {useNavigate} from 'react-router-dom'

const Logoutpage=()=>{

    const navigate=useNavigate()
     
    const logout=()=>{
        navigate('/')
    }

    return(
        <div className="flex justify-center  ">
            
            <div className="bg-amber-100 mt-5 w-30 text-center ml-45 rounded-2xl"><button onClick={logout}>LOGOUT</button></div>
            
        </div>

    )
}
export default Logoutpage