import {useState} from 'react';
import PropTypes from 'prop-types';

const useTabNavigation = (items) => {
  const [selected, setSelected] = useState(0);

  const selectNext = () => setSelected((selected) => (selected + 1));

  const selectPrev = () => {
    setSelected((selected) => {
      if (selected === 0) return 0;
      return (selected - 1);
    });
  };

  const selectByIndex = (idx) => setSelected(idx);

  const selectByPath = (path) => setSelected(() => {
    const index = items.findIndex(item => item.path === path);
    if (index < 0) return 0;
    return index;
  });

  const getSelected = () => {
    return [items[selected], selected];
  };

  return {
    selected: getSelected(),
    selectNext,
    selectPrev,
    selectByIndex,
    selectByPath
  };
};

useTabNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};


export default useTabNavigation;