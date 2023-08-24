import React from 'react';
import './NavBar.css';

const NavBar = () => {

  return (
    <div className='navBar'>
      <ul className='navUl'>
        <li className='navLi'>
          <p className='navText'>About</p>
        </li>
        <li className='navLi'>
          <p className='navText'>Experiences</p>
        </li>
        <li className='navLi'>
          <p className='navText'>Skills</p>
        </li>
        <li className='navLi'>
          <p className='navText'>Connect</p>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;