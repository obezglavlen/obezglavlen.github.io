import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const SearchBar = ({ setter }) => {
  return (
    <input type="text" onChange={(e) => setter(e.target.value)}
           className={'search-bar'}/>
  );
};

SearchBar.propTypes = {
  setter: PropTypes.func.isRequired
};

export default SearchBar;
