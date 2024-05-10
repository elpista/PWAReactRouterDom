import React, { useState, useEffect } from 'react';
import Search from '../Search/Search.jsx';
import ImageLink from '../ImageLink/ImageLink.jsx';
import { ROUTES } from '../../const/routes.js';

function Header() {



  return (
    <div className='w-full flex h-24 mb-2 bg-inherit text-base border-b-2 items-center justify-between px-5'>
      <div className="flex items-center justify-between flex-2 ml-10">
      <ImageLink 
        to= {ROUTES.home}
        imageUrl="https://png.pngtree.com/png-clipart/20230807/original/pngtree-video-game-shop-theme-logo-template-tournament-happy-shop-vector-picture-image_10094359.png"
        alt="Home"
        className="h-20  "
      />
      </div>
      <div className="flex-1 flex justify-end">
        <Search />
      </div>
    </div>
  );
}

export default Header;