import React from 'react';
import { Link } from 'react-router-dom';

const ImageLink = ({ to, imageUrl, alt, className}) => {
  return (
    <Link to={to}>
      <img src={imageUrl} 
      alt={alt} 
      className={className} />
    </Link>
  );
};

export default ImageLink;