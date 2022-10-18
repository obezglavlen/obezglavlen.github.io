import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TabBarItem from './TabBarItem';
import './styles.scss';
import useTabNavigation from '../../hooks/useTabNavigation';
import { useLocation } from 'react-router-dom';

const TabBar = ({ items }) => {
  const { selected, selectByPath, selectByIndex } = useTabNavigation(items);
  const location = useLocation();


  useEffect(() => {
    const path = location.pathname.split('/').at(-1);

    if (path) selectByPath(path);
    else selectByIndex(0);
  }, [location.pathname, selectByIndex, selectByPath]);

  const getXOffset = () => {
    const mid = items.length / 2;

    if (!Number.isInteger(mid) && selected[1] === mid) {
      return '0';
    }

    let offset = (selected[1] - mid) * 100;
    offset += 50;

    return `${offset}%`;
  };

  return (<div className="tab-bar">
    {items.map((item, idx) => (<TabBarItem
      key={idx}
      to={item.path}
      title={item.title}
      onChange={(e) => selectByPath(e.target.htmlFor)}
      checked={selected[1] === idx}
    />))}
    <span
      className="tab-bar__glider"
      style={{
        transform: `translateX(${getXOffset()})`,
      }}
    ></span>
  </div>);
};

TabBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired, path: PropTypes.string.isRequired,
  })),
};

export default TabBar;
