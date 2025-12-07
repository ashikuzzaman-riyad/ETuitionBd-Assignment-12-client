import React from 'react';
import { NavLink } from 'react-router';

const Navlink = ({data}) => {
    return (
       <li>
      <NavLink className="hover:text-[#9F62F2] hover:underline" to={data.path}>
        {data.name}
      </NavLink>
    </li>
    );
};

export default Navlink;