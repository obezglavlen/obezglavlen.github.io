import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';


const NavBarItem = ({to, title, icon}) => {
  return (
    <li className={'navigation__list__item'}>
      <NavLink
        to={to}
        end={to === '/'}
        className={({isActive}) =>
          isActive ? 'navigation__list__item__active' : ''
        }
        onClick={() => document.title = title}
      >
        {title}{" "}
        {icon && <i className={icon}></i>}
      </NavLink>
    </li>
  );
};

NavBarItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  active: PropTypes.bool,
};

export default NavBarItem;
