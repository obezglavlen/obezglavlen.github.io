import React from 'react';
import NavBarItem from './NavBarItem';
import PropTypes from 'prop-types';
import './styles.scss';

const NavBar = ({items, direction, children}) => {
  // TODO: maybe do slider tabs
  const renderItem = (item, index) => {
    return (
      <NavBarItem key={index} to={item.to} title={item.title}
                  icon={item.icon}/>
    );
  };

  return (
    <nav className="navigation">
      <ul
        className={`navigation__list ${
          direction === 'column' ? 'navigation__list__column' : ''
        }`}
      >
        {items.map(renderItem)}
        {children}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  ).isRequired,
  direction: PropTypes.oneOf(['row', 'column']),
  children: PropTypes.any,
};

NavBar.defaultProps = {
  direction: 'row',
};

export default NavBar;
