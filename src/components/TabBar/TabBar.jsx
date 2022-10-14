import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TabBarItem from './TabBarItem';
import './styles.scss';

const TabBar = ({items}) => {
  const [selected, setSelected] = useState(0);

  const getXOffset = () => {
    const mid = items.length / 2;

    if (!Number.isInteger(mid) && selected === mid) {
      return '0';
    }

    let offset = (selected - mid) * 100;

    offset += 50;

    return `${offset}%`;
  };

  const selectCurrentItem = (idx) => () => {
    setSelected(idx);
  };

  return (
    <div className='tab-bar'>
      {items.map((item, idx) => (
        <TabBarItem
          key={item.id}
          id={item.id}
          title={item.title}
          onChange={selectCurrentItem(idx)}
          checked={selected === idx}
        />
      ))}
      <span
        className='tab-bar__glider'
        style={{
          transform: `translateX(${getXOffset()})`,
        }}
      ></span>
    </div>
  );
};

TabBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TabBar;
