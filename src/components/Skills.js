import React from 'react';
import './Skills.css'

const Skills = () => {
  return (
    <div className='skillsContainer'>
      <p className='skillsHeader'>Tech Stacks</p>
      <ul className='skillsList'>
        <li className='skill'>
          <img 
              className='skillImg'
              src={require('../resources/icons/icons8-python-50.png')}
              alt='Python logo.'
              />
        </li>
        <li className='skill'>
          <img 
              className='skillImg'
              src={require('../resources/icons/icons8-django-50.png')}
              alt='Django logo.'
              />
        </li>
        <li className='skill'>
          <img 
              className='skillImg'
              src={require('../resources/icons/icons8-flask-50.png')}
              alt='Flask logo.'
              />
        </li>
        <li className='skill'>
          <img 
              className='skillImg'
              src={require('../resources/icons/icons8-react-50.png')}
              alt='React logo.'
              />
        </li>
        <li className='skill'>
          <img 
              className='skillImg'
              src={require('../resources/icons/icons8-react-native-50.png')}
              alt='React native logo.'
              />
        </li>
        <li className='skill'>
          <img 
              className='skillImg'
              src={require('../resources/icons/icons8-postgres-50.png')}
              alt='Postgres logo.'
              />
        </li>
        <li className='skill'>
          <img 
              className='skillImg'
              src={require('../resources/icons/icons8-javascript-50.png')}
              alt='Javascript logo.'
              />
        </li>
        <li className='skill'>
          <img 
              className='skillImg'
              src={require('../resources/icons/icons8-css-logo-50.png')}
              alt='Css logo.'
              />
        </li>
        <li className='skill'>
          <img 
              className='skillImg'
              src={require('../resources/icons/icons8-html-logo-50.png')}
              alt='HTML logo.'
              />
        </li>
      </ul>
    </div>
  )
}

export default Skills;