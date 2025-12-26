

const Navbar =()=>{

    const scrollview=(id)=>{

        document.getElementById(id).scrollIntoView(
            {
                behavior:"smooth",
                block:'start'
            }
        )

    }

    return(
        <div className="flex justify-between bg-red-700 p-4">
            <div className="flex ml-4">
                Logo
            </div>

            <div className='flex gap-8 me-4'>
                <button onClick={()=>scrollview('home')}>Home</button>
                <button onClick={()=>scrollview('about')}>About</button>
                <button onClick={()=>scrollview('contact')}>Contact</button>
            </div>
        </div>
    )
}
export default Navbar