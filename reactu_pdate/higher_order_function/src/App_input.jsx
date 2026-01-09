import Input from "./components/Input"
import withInput from "./hoc/withInput"

const ChangeInput=withInput(Input)

const App_input=()=>{

    const hocValue=(e)=>{
        e.preventDefault()
        const[a,b]=e.target.value.split(',').map(Number)
        if(isNaN(a)||isNaN(b))
            console.log('not a number');
        console.log(a+b);
         }

    return(
        <>
        <Input onChange={hocValue} text='normal userName'/>

        <br />

        <ChangeInput text='HOC userName'/>
        </>
    )
}
export default App_input