import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(
        <div className='bg-amber-400 text-white p-4 flex justify-between'>
        <div className='font-bold bg-amber-900 p-1 rounded-2xl w-16 text-center'>
            Logo
        </div>
        <div className='flex gap-9 me-6'>
            <Link className='font-bold bg-amber-900 p-1 rounded-2xl w-35 text-center' to='/'>Home Banner</Link>
            <Link className='font-bold bg-amber-900 p-1 rounded-2xl w-30 text-center' to='/Interaction'>Interaction</Link>
            <Link className='font-bold bg-amber-900 p-1 rounded-2xl w-30 text-center' to='/function'>Function </Link> 
            <Link className='font-bold bg-amber-900 p-1 rounded-2xl w-30 text-center' to='/container'>container </Link>     
        </div>
        </div>
    )
}

export default Navbar