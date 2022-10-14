import React from 'react';
import TabBar from '../../components/TabBar/TabBar';
import {Navigate, useRoutes} from 'react-router-dom';

const routes = [
  {
    title: 'Page one',
    path: 'minecraft',
    element: <div>minecraft</div>
  },
  {
    title: 'Page two',
    path: 'windows',
    element: <div>windows</div>
  },
  {
    title: 'Page three',
    path: 'android',
    element: <div>android</div>
  },
  {
    title: 'Page hui',
    path: 'hui',
    element: <div>hui</div>
  },
];

const Downloads = () => {
  const routeComponents = useRoutes([{
    path: '/',
    children: [{
      index: true,
      element: <Navigate to={routes[0].path}/>
    }, ...routes]
  }]);

  return (
    <>
      <TabBar items={routes}/>
      <main>
        {routeComponents}
      </main>
    </>
    // TODO
  );
};

export default Downloads;
