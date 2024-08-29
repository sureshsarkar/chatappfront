import { useState } from 'react'
import Login from './pages/login/Login.jsx';
import './App.css'
import SignUp from './pages/signup/SignUp.jsx';
import Home from './pages/home/Home.jsx';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App