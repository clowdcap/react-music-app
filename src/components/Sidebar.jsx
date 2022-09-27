import { useState } from 'react'
import { NavLink } from 'react-router-dom';

import { RiCloseLine } from 'react-icons/ri'

import { logo } from '../assets'
import { links } from '../assets/constants'

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <>
      <div className=".md:flex hidden flex-col py-10 px-4 bg-[#191624] w-[240px]">
        <img src={logo} alt="logo" className='w-full object-contain h-14' />
      </div>
    </>
  )
}

export default Sidebar
