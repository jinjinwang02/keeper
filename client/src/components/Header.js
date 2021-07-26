import React, { useState } from 'react';

function Header() {
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded((preValue) => {
      return !preValue;
    });
  }

  return (
    <header>
      <h1 className='page-title'>Keeper</h1>
      <button onClick={expand} className='about-button'>
        ABOUT
      </button>
      {isExpanded && (
        <div>
          <br></br>
          <p>
            This minimalist single-page application allows you to keep and
            delete notes.
          </p>
          <br></br>
          <p>
            I'm Jinjin Wang, a Front End Developer and Multidisciplinary
            Designer based in London.
          </p>
          <p>You can find me via:</p>
          <i className='fas fa-laptop'></i>{' '}
          <a
            href='https://jinjinwang.co.uk'
            target='_blank'
            rel='noopener noreferrer'
            style={{ marginRight: '16px' }}
          >
            Portfolio website
          </a>
          <i className='far fa-envelope'></i>{' '}
          <a
            href='mailto: jinjinwang@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{ marginRight: '16px' }}
          >
            Email
          </a>
          <i className='icon fab fa-linkedin'>
            {' '}
            <a
              href='https://www.linkedin.com/in/jinjin-wang/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ marginRight: '16px' }}
            >
              Linkedin
            </a>
          </i>
          <i className='fab fa-github'></i>{' '}
          <a
            href='https://github.com/jinjinwang02'
            target='_blank'
            rel='noopener noreferrer'
            style={{ marginRight: '16px' }}
          >
            Github
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
