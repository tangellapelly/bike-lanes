import React from 'react';
import Logo from '../static/Logo';
import './Header.scss';
const Header = ({ label }) => {
   return (
      <header>
         <Logo className="logo" />
         <div className="vertical-line" />
         <h1>Nouvelle pistes cyclables post COVID en {label}</h1>
      </header>
   );
};

export default Header;
