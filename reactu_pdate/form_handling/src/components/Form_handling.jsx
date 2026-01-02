import {useEffect, useState } from "react"

const Form_handling=()=>{

  const[form,setForm]=useState({username:'',number:'',email:'',password:''})
  const[error,setError]=useState('')
  const[datas,setDatas]=useState({})

  const handlechange =(e)=>{

  setForm({...form,[e.target.name]:e.target.value})

  console.log(form);
  }

  const handlesubmit=(e)=>{
   e.preventDefault()

  //  console.log(form);
   

    const {username,number,email,password}=form
    
    if(username==='' || number==='' || email==='' || password===""){
      setError('please fill the empty fields')
    }
    else if(!email.includes('@')||!email.includes('.')){
      setError('enter the valid mail')
    }
    else if(password.length<=10){
      setError('enter the password atleast 10 digit')
    }
    else{
      localStorage.setItem('users',JSON.stringify(form))
      alert('register successfully')
      setError('')
      setForm({username:"",number:"",email:"",password:""})
}}

  useEffect(()=>{
   
    const getdat=()=>{
      const data=localStorage.getItem('users')
      const store=JSON.parse(data)
      setDatas(store)
    }
    getdat()

},[form])


    return(
      <>
      <form onSubmit={handlesubmit} className="flex flex-col items-center mt-30 gap-3">
        <label className=" mr-3">User Name:  
        <input onChange={handlechange} name='username' value={form.username} className="bg-gray-300 border-2 ml-3" type="text" placeholder="enter the name"/>
        </label>

        <label className="mr-13">Mobile Number:
        <input onChange={handlechange} name='number'  value={form.number} className="bg-gray-300 border-2 ml-3" type="number" placeholder="enter the Number" />
        </label>

        <label className="ml-5" >Email:
        <input onChange={handlechange} name='email'  value={form.email} className="bg-gray-300 border-2 ml-3" type="text" placeholder="enter the Email" />
        </label>

        <label className="mr-2">Password:
        <input onChange={handlechange} name='password' value={form.password} className="bg-gray-300 border-2 ml-3" type="text" placeholder="enter the Password" />
        </label> 
        <input type="submit" value='register' className="bg-black text-white p-2 rounded"/>    
    
     </form>
     <p className="text-red-700 text-2xl">{error}</p>

     <h1>{datas.username}</h1>

     </>

    )
}
export default Form_handling