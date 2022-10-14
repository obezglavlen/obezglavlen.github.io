import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const TabBarItem = ({title, id, checked, onChange}) => {
  return (
    <>
      <input
        type='radio'
        name='tabs'
        id={id}
        onChange={onChange}
        checked={checked}
        style={{display: 'none'}}
      />
      <Link to={id} onClick={onChange} className='tab-bar__item__link'><label className='tab-bar__item'
                                                                              htmlFor={id}>{title}</label></Link>
    </>
  );
};

TabBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

export default TabBarItem;
