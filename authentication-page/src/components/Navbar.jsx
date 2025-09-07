import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-evenly p-10 font-bold text-2xl bg-blue-200'>
        <NavLink to="/" >HOME</NavLink>
        <NavLink to="/signup" >SIGN UP</NavLink>
        <NavLink to="/login" >LOG IN</NavLink>
    </div>
  )
}

export default Navbar