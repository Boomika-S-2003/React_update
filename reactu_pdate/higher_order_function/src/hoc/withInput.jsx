const withInput =(Wrappedcomp)=>(props)=>{

    const changeNum=(value)=>{
       const [a,b]=value.split(",").map(Number)

       if(isNaN(a)||isNaN(b)) 
    console.log ("i need a number");
    console.log('Result',a*b);
       
    }
    

    return <Wrappedcomp {...props} hocValue={changeNum}/>
}

export default withInput