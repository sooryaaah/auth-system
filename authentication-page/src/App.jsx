import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import EmailVerification from './pages/EmailVerification'
import OtpVerification from './pages/OtpVerification'
import ResetPassword from './pages/ResetPassword'

const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/emailverification' element={<EmailVerification></EmailVerification>}/>
        <Route path='/otpverification' element={<OtpVerification/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App