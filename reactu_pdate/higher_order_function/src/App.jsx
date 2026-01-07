import Button from "./components/button"
import withAlert from "./hoc/withAlert"
const Alterbut=withAlert(Button)
const App =()=>{

const handon=()=>{
    alert('i am the normal ')
}

    return(
        <div>

  

            <Button text={'normal clickk'} onClick={handon}/>
            
            

            <Alterbut text={'hoc but'} />
            
        </div>
    );
};
export default App