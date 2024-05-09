import React, { useState, useEffect } from 'react';
import Search from '../Search/Search.jsx';
import ImageLink from '../ImageLink/ImageLink.jsx';
import { ROUTES } from '../../const/routes.js';
import Button from '../Button/Button.jsx';

function Header({ Juegos, setSearchResults }) {



  return (
    <div>
      <ImageLink 
        to= {ROUTES.home}
        imageUrl="./images/house.svg"
        alt="Home"
      />
      <Search />
    </div>
  );
}

export default Header;