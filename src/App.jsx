import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'

const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<LogIn/>} />
      </Routes>
     </Router>
    </div>
  )
}

export default App