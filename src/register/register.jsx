import React, { useEffect } from 'react';
import '../landing_page/landing.css';

function Register() {
  
  return (
    <>
      <nav className="flex-nav">
        <div>
          <div className="flex">
            <div>
              <p id="logo">CEMA<span id="highlight">.</span></p>
            </div>
            <div>
              <a href="#" className="toggle-nav">Menu <i className="ion-navicon-round"></i></a>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our information</a></li>
                <li><a href="#">Star with us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Register;
