import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../assets/css/navbar.css'

function NavBar() {
 

  return (
    <div className='containernavbar'>
        <div>
          <Link to="/">
            <button className="buttonreturn">Regresar</button>
          </Link>
        </div>
        <div>
          <img className="logo" src={logo}></img>
        </div>
        <div className="namelogo">
            CURP Generation
        </div>
    </div>
  );
}

export default NavBar;
