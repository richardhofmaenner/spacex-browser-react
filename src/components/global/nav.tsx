import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  const navItems = [
    {path: '/', text: 'Home'}
  ];
  return (
    <div className="container mx-auto">
      <nav>
        <ul className="mt-10">
          {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              )
            })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
