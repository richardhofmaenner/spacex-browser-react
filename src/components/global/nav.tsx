import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  const navItems = [
    {path: '/', text: 'Home'},
    {path: '/about', text: 'About'}
  ];
  return (
    <div className="container mx-auto mb-10">
      <nav role="navigation">
        <ul className="mt-10">
          {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="inline-block"
                >
                  <NavLink
                    className="px-5 py-2 transition-colors hover:text-gray-400"
                    to={item.path}
                    activeClassName="text-gray-400"
                  >
                    {item.text}
                  </NavLink>
                </li>
              )
            })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
