import React, { useState, useEffect } from 'react';
import Search from '../Search/Search.jsx';
import ImageLink from '../ImageLink/ImageLink.jsx';
import { ROUTES } from '../../const/routes.js';

function Header({ Juegos, setSearchResults }) {



  return (
    <div>
      <ImageLink 
        to= {ROUTES.home}
        imageUrl="./images/house.svg"
        alt="Home"
      />
      <Search Juegos={Juegos} setSearchResults={setSearchResults} />
    </div>
  );
}

export default Header;