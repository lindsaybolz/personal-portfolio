import React from 'react';
import './NavBar.css';
import resume from '../resources/Wilson-Resume-8-22-23.pdf'

const NavBar = () => {
  return (
    <div className='navBar'>
      <ul className='navUl'>
        <li className='navLi'>
          <a href="#about" className='navText'>About</a>
        </li>
        <li className='navLi'>
          <a href="#adventures" className='navText'>Adventures</a>
        </li>
        <li className='navLi'>
          <a href="#skills" className='navText'>Tech Stacks</a>
        </li>
        <li className='navLi'>
          <a href="#footer" className='navText'>Connect</a>
        </li>
        <li className='navLi'>
          <a href={resume} target='_blank' className='navText'>Resume</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;