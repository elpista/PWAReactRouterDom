import React, { useState, useEffect } from 'react';
import ImageLink from '../ImageLink/ImageLink';
  
//FALTA COMPLETAR EL FOOTER, PARA EL 11/5 YA ESTA

function Footer() {
  return (
    <div className=" bg-black  h-32 mt-10">
      <div className='flex'>
        <div>
        <h4>Follow us</h4>
        </div>
        <div>
            <ImageLink 
            to={'https://www.instagram.com/gamezonepwa'}
            imageUrl="https://png.pngtree.com/png-clipart/20230807/original/pngtree-video-game-shop-theme-logo-template-tournament-happy-shop-vector-picture-image_10094359.png"
            alt="Instagram"
            className="h-10s"
            />
        </div>
      </div>
    </div>
  );
}

export default Footer;
