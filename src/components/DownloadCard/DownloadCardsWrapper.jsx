import React from 'react';
import PropTypes from 'prop-types';

const DownloadCardsWrapper = ({ children }) => {
  return (
    <section className="downloads__wrapper">
      {children}
    </section>
  );
};

DownloadCardsWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default DownloadCardsWrapper;
