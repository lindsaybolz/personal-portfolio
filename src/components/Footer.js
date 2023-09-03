import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerContainer' id='footer'>
        <div className='contactMessage'>
          Contact me!  Any questions about my adventures, coding experiences, or anything inbetween, I would love to chat!
        </div>
        <div className='contactInfoContainer'>
          <div className='contactInfo'>
            <div>
              <a className='footerEmail' href={'mailto:lindsaybolzwilson@gmail.com'}>lindsaybolzwilson@gmail.com</a> | (206) 910 - 0921
            </div>
          </div>
          <div className='logos'>
            <a className='logo contact' href='https://www.linkedin.com/in/lindsay-wilson-148183139/'>
              <img 
                  className='logoImg'
                  src={require('../resources/icons/icons8-linkedin-50.png')}
                  alt='LinkedIn logo.'
                  height={20}
                  />
            </a>
            <a className='logo contact' href='https://github.com/lindsaybolz'>
              <img 
                  className='logoImg'
                  src={require('../resources/icons/icons8-github-50.png')}
                  alt='GitHub logo.'
                  height={20}
                  />
            </a>
          </div>
        </div>
      <p>&copy; 2023 Lindsay Wilson</p>
    </div>
  );
};

export default Footer;