import { useLocation, useNavigate } from "react-router-dom"


const Showusers=()=>{

    const location=useLocation()

const showuser=location.state.user

const navigate=useNavigate()



    return(

        <div className="bg-orange-400 p-2 gap-3 m-3 wrap-anywhere rounded-3xl" >
            <div >firstName:{showuser.firstName}</div>
            <div>lastName:{showuser.lastName}</div>
            <div>age:{showuser.age}</div>
            <div>gender:{showuser.gender}</div>
            <div>email:{showuser.email}</div>
            <div>phone:{showuser.phone}</div>
            <button onClick={()=>navigate(-1)} className="bg-white text-black p-1 rounded-3xl mt-3">back to first</button>
            </div>



    )
}
export default Showusers