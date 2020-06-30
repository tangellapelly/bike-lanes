import React from 'react';
import Logo from '../static/Logo';
import { languages, CURRENT_LANGUAGE } from '../config';
import './Header.scss';
const Header = ({ label }) => {
   return (
      <header>
         <Logo className="logo" />
         <div className="vertical-line" />
         <h1>
            {languages.title[CURRENT_LANGUAGE](label)}
         </h1>
      </header>
   );
};

export default Header;
