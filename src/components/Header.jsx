import React from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome,HiMagnifyingGlass ,HiStar,HiPlayCircle,HiTv } from 'react-icons/hi2'
import { HiPlus,HiDotsVertical } from 'react-icons/hi'
function Header() {
  const menu=[
    {
      name:"HOME",
      icon:HiHome
    },
    {
      name:"SEARCH",
      icon:HiMagnifyingGlass
    },
    {
      name:'WATCH LIST',
      icon:HiPlus
    },
    {
      name:"ORGINALS",
      icon:HiStar
    },
    {
      name:"MOVIES",
      icon:HiPlayCircle
    },
    {
      name:"SERIES",
      icon:HiTv
    }

  ]
  return (
    <div>
      <img src={logo} className='w-[80px] md:w-[115p] object-cover' />
    </div>
  )
}

export default Header
