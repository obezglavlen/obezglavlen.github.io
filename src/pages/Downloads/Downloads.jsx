import React from 'react';
import items from '../../data/downloads-items.json';
import {Navigate, useRoutes} from 'react-router-dom';
import TabBar from '../../components/TabBar';
import DownloadCard, {DownloadCardsWrapper} from '../../components/DownloadCard';

const routes = [
  {
    title: 'Page one',
    path: 'minecraft',
    element: <DownloadCardsWrapper>
      {items.items.map(({title, description, img, externalUrl}, index) => <DownloadCard title={title}
                                                                                        description={description}
                                                                                        img={img}
                                                                                        externalUrl={externalUrl}
                                                                                        key={index}/>)}
    </DownloadCardsWrapper>
  },
  {
    title: 'Page two',
    path: 'windows',
    element: <DownloadCardsWrapper>
      {items.items.map(({title, description, img, externalUrl}, index) => <DownloadCard title={title}
                                                                                        description={description}
                                                                                        img={img}
                                                                                        externalUrl={externalUrl}
                                                                                        key={index}/>)}
    </DownloadCardsWrapper>
  },
  {
    title: 'Page three',
    path: 'android',
    element: <DownloadCardsWrapper>
      {items.items.map(({title, description, img, externalUrl}, index) => <DownloadCard title={title}
                                                                                        description={description}
                                                                                        img={img}
                                                                                        externalUrl={externalUrl}
                                                                                        key={index}/>)}
    </DownloadCardsWrapper>
  },
  {
    title: 'Page hui',
    path: 'hui',
    element: <DownloadCardsWrapper>
      {items.items.map(({title, description, img, externalUrl}, index) => <DownloadCard title={title}
                                                                                        description={description}
                                                                                        img={img}
                                                                                        externalUrl={externalUrl}
                                                                                        key={index}/>)}
    </DownloadCardsWrapper>
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
