import React from 'react';
import { Link } from 'react-router-dom';

const ImageLink = ({ to, imageUrl, alt }) => {
  return (
    <Link to={to}>
      <img src={imageUrl} 
      alt={alt} 
      className="cursor-pointer" />
    </Link>
  );
};

export default ImageLink;