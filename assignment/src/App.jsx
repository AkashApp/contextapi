import './App.css'
import { Login } from './Components/Login/Login'
import { Navbar } from './Components/Navbar/Navbar'
import {AuthContext} from '../context/AuthContext';
import { useContext } from 'react';

function App() {

  const {stat}= useContext(AuthContext);


  return (
    <div className="App">
      <Navbar/>
      {stat==="Login"?"":<Login/>}
    </div>
  )
}

export default App
