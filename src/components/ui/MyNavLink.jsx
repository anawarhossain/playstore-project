
import { NavLink } from 'react-router';

const MyNavLink = ({to, className, children}) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => `font-semibold ${className} ${isActive ? "bg-gray-200" : ""}`}
      >
        {children}
      </NavLink>
    );
};

export default MyNavLink;