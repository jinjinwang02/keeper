import React, { useState } from "react";

function Header() {
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(preValue => {
      return !preValue
    });
  }

  return (
    <header>
      <h1 className="page-title">Keeper</h1>
      <button onClick={expand} className="about-button">ABOUT</button>
      {isExpanded && (
        <div>
          <br></br>
          <p>This minimalist single-page application allows you to keep and delete notes.</p>
          <br></br>
          <p>I'm Jinjin Wang, a front-end developer and multidisciplinary fashion designer based in London.</p>
          <p>Contact me by: </p>
          <i className="far fa-envelope"></i> <a href="mailto: jinjinwang@gmail.com" target="_blank" rel="noopener noreferrer">Email   &nbsp;&nbsp;</a>
          <i className="icon fab fa-linkedin"> <a href="https://www.linkedin.com/in/jinjin-wang-616a99183/" target="_blank" rel="noopener noreferrer">Linkedin &nbsp;</a></i>
          <i className="fab fa-github"></i> <a href="https://github.com/lyrisswing" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      )}
    </header>
  );
}

export default Header;
