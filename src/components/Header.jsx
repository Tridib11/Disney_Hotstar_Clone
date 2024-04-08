import React from 'react'
import logo from './../assets/Images/logo.png'
function Header() {
  return (
    <div>
      <img src={logo} className='w-[80px] md:w-[115p] object-cover' />
    </div>
  )
}

export default Header
