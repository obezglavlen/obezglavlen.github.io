import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const TabBar = ({title, to, checked, onChange}) => {
  return (
    <>
      <input
        type="radio"
        name="tabs"
        id={to}
        onChange={onChange}
        checked={checked}
        style={{display: 'none'}}
      />
      <Link to={to} onClick={onChange} className="tab-bar__item__link"><label className="tab-bar__item"
                                                                              htmlFor={to}>{title}</label></Link>
    </>
  );
};

TabBar.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

export default TabBar;
