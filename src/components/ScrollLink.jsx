import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ScrollLink = ({ to, children, ...props }) => {
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollLink;