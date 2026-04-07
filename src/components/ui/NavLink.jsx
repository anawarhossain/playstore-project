import React from 'react';

const NavLink = ({to, children}) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => `font-semibold ${isActive ? "btn" : ""}`}
      >
        {children}
      </NavLink>
    );
};

export default NavLink;