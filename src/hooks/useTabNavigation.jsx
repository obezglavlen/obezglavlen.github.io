import {useState} from 'react';

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

  const getSelected = () => {
    return [items[selected], selected];
  };

  return {selected: getSelected(), selectNext, selectPrev, selectByIndex};
};

export default useTabNavigation;
