import eyeliner from './assets/react.svg'
import {useState} from 'react'


const Products=()=>{

    const[product]=useState([{id:1,productimg:eyeliner, Product:'eyliner',price:123},
        {id:2,productimg:eyeliner, Product:'lipstick',price:456}
    ])

    return(
        <div className='bg-amber-100 flex gap-5 p-4'>
            {product.map((e)=>(
            <div className='bg-red-400 text-white p-3 rounded' key={e.id}>
                <img src={e.productimg} />
                <h1>productName:{e.Product}</h1>
                <h1>Product price:{e.price}</h1>
                <button className='bg-black text-white p-2 rounded mt-3'>buy now</button>
            </div>

            ))}
          

        </div>

    )
}

export default Products 