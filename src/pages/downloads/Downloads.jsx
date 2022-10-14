import React from 'react';
import TabBar from '../../components/TabBar/TabBar';
import {Navigate, Route, Routes,} from 'react-router-dom';

const items = [
  {
    title: 'Page one',
    id: 'minecraft',
  },
  {
    title: 'Page two',
    id: 'windows',
  },
  {
    title: 'Page three',
    id: 'android',
  },
  {
    title: 'Aboab',
    id: '4d412s',
  },
];

const Downloads = () => {
  return (
    <>
      <TabBar items={items}/>
      <Routes>
        <Route path='/'>
          <Route index element={<Navigate to='minecraft'/>}/>
          <Route path='minecraft' element='das'/>
          <Route path='windows'/>
          <Route path='android'/>
        </Route>
      </Routes>
    </>
    // TODO
  );
};

export default Downloads;
