import{useNavigate} from 'react-router-dom'

const Loginpage=()=>{

    const navigate=useNavigate()

   const login=()=>{

    navigate('/Home')

   } 

    return(
        <div className="flex justify-center  ">
            <form className="text-center w-150 h-60 mt-40 bg-amber-200 p-15 rounded-2xl "> 
                <span>User Name : </span>
               <input className="bg-amber-100" type="text"  name='UserName'/>
                <br /><br />
               <span>Password : </span>
               <input className="bg-amber-100" type="text"  name='UserName'/>
            <div className="bg-amber-100 mt-5 w-30 text-center ml-45 rounded-2xl"><button onClick={login}>LOGIN</button></div>
            </form>
        </div>

    )
}
export default Loginpage