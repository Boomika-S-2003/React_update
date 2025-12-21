import {NavLink} from 'react-router-dom'

const Navbar=()=>{
    return(
        <div className='bg-amber-400 text-white p-4 flex justify-between'>
        <div className='font-bold bg-amber-900 p-1 rounded-2xl w-16 text-center'>
            Logo
        </div>
        <div className='flex gap-9 me-6'>
            <NavLink to='/' className={({isActive})=>isActive?"bg-white text-black rounded":''} end>Login</NavLink>
            <NavLink to='/Home' className={({isActive})=>isActive?"bg-white text-black rounded":''} >Home</NavLink>
             <NavLink to='/Logoutpage' className={({isActive})=>isActive?"bg-white text-black rounded":''} >Logout</NavLink>
        </div>
        </div>
    )
}

export default Navbar