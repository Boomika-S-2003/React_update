const withAlert=(WrappedCompo)=> (props)=>{
    const handleclick=()=>{
        console.log('cliicked');
        

        alert('i am the hoc')

    }
       
    return<WrappedCompo {...props} onClick={handleclick}/>;
    };


export default withAlert