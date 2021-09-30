import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Navbar = () => {
  const{openSideBar, openSubmenu, closeSubmenu} = useGlobalContext();

  const displaySubmenu = (e) => {
    const btnpage = e.target.textContent;
    const btnlocation = e.target.getBoundingClientRect();
    const btncenter = (btnlocation.left + btnlocation.right) /2;
    const btnbottom = btnlocation.bottom + 30;
    openSubmenu(btnpage, {btncenter,btnbottom});

  }

  const handleCloseSubmenu = (e) => {
    //close when hover over navbar but not over buttons
    if(!e.target.classList.contains('link-btn'))
    {
      closeSubmenu();
    }
  }

  return <nav>
    <div className='nav-header' onMouseOver={handleCloseSubmenu}>
    <button className='nav-toggle' onClick={openSideBar}><FaBars/></button>
    <span className='nav-logo'>LOGO</span>
    </div> 
    <ul className='nav-links'>
      <li><button className='link-btn' onMouseOver={displaySubmenu}>products</button></li>
      <li><button className='link-btn' onMouseOver={displaySubmenu}>developers</button></li>
      <li><button className='link-btn' onMouseOver={displaySubmenu}>company</button></li>
    </ul>
    <button className='action-btn'>Sign in</button>
  </nav>
}

export default Navbar