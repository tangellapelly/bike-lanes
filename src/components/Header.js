import React from 'react';
import Logo from '../static/Logo';
import './Header.scss';
const Header = ({ label }) => {
   return (
      <header>
         <Logo className="logo" />
         <div className="vertical-line" />
         <h1>Nouvelles pistes cyclables post COVID à {label}</h1>
      </header>
   );
};

export default Header;
