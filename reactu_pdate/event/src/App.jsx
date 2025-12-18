import Navbar from './components/Navbar'
import Home from './components/Home'
import Interaction from './components/Interaction'
import { Route,Routes } from 'react-router-dom'
import StateFunction from './components/StateFunction'

const App=()=>{
    return(
        <div>
          <header>
            <Navbar/>
          </header>
          <main>
             <Routes>
              <Route path='/'element={<Home/>}/>
              <Route path='/Interaction'element={<Interaction/>}/>
              <Route path='/function'element={<StateFunction/>}/>
             </Routes>
          </main>

        </div>
    )
}
export default App