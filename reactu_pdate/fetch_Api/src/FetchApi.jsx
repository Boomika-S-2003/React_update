import {useState} from "react"


const FetchApi=()=>{

    const[getproduct,setGetproduct]=useState([]);

   const showproduct=async()=>{

    const productdatas=await fetch('https://dummyjson.com/products')
      
    const datas=await productdatas.json()

    // console.log(datas.products);
    


    setGetproduct(datas.products);
    

   }



    return(
        <div>
            <div className='bg-amber-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-3'> 
            {getproduct.map((e)=>(
            <div className='bg-red-400 text-white p-3 rounded' key={e.id}>
                <img src={e.img} />
                <h1>productName:{e.title}</h1>
                <h1>Product price:{e.price}</h1>
                <h1>Product cat:{e.category}</h1>
                <button className='bg-black text-white p-2 rounded mt-3'>buy now</button>
            </div>

            ))}

            <div>
                <button onClick={showproduct} className='bg-black text-white p-2 rounded mt-3'>Show Product</button>
            </div>
          

        </div>

        </div>
    )
}
export default FetchApi