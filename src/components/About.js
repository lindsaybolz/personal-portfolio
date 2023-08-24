import React from 'react';
import './About.css'
const About = () => {
  return (
    <div className='aboutContainer'>
      <h1 className='name'>Lindsay Bolz Wilson</h1>
      <div className='connectionsContainer'>
        <div className='emailPhone'>
          <div>
            lindsaybolzwilson@gamil.com | (206) 910 - 0921
          </div>
        </div>
        <div className='logos'>
          <a className='logo' href='https://www.linkedin.com/in/lindsay-wilson-148183139/'>
            <img 
                className='logoImg'
                src={require('../resources/icons/icons8-linkedin-50.png')}
                alt='LinkedIn logo.'
                height={20}
                />
          </a>
          <a className='logo' href='https://github.com/lindsaybolz'>
            <img 
                className='logoImg'
                src={require('../resources/icons/icons8-github-50.png')}
                alt='GitHub logo.'
                height={20}
                />
          </a>
        </div>
      </div>
      <img 
        src={require('../resources/profile-pic.jpg')}
        height={200} 
        alt='Portrate of Lindsay on a lake in a puffy green jacket'
        style={{borderRadius: 20}}
        />

      <p className='aboutParagraph'>My name is Lindsay Wilson.  While originally from the pacific northwest and like to call most of the great west home.  With influences from school,  to driving throughout this amazing world, to peers and strangers, my passions drive me forward.  I look to have a positive impact on this beautiful place we call earth be it creating climate solutions or social justice for all.</p>
    </div>
  )
}

export default About;