import React, {useEffect, useRef, useState} from 'react';
import DownloadCard, {
  DownloadCardsWrapper
} from '../../components/DownloadCard';
import {Navigate, useRoutes} from 'react-router-dom';
import TabBar from '../../components/TabBar';

const Downloads = () => {
  const renderCount = useRef(0);
  const [downloadItems, setDownloadItems] = useState({});

  renderCount.current = renderCount.current + 1;

  useEffect(() => {
    fetch('/assets/data/downloads-items.json')
      .then(response => response.json())
      .then(data => setDownloadItems(data));
  }, []);

  const routes = Object.keys(downloadItems).map(key =>
    ({
      title: key.charAt(0).toUpperCase() + key.slice(1),
      path: key,
      element: <DownloadCardsWrapper>
        {downloadItems[key].map((item, index) => <DownloadCard
          title={item.title}
          description={item.description}
          img={item.img}
          externalUrl={item.externalUrl}
          internalUrl={item.internalUrl}
          key={index}
        />)}
      </DownloadCardsWrapper>
    })
  );

  const routeComponents = useRoutes([
    {
      path: '/',
      children: [
        {
          index: true,
          element: renderCount.current > 1 ?
            <Navigate to={routes[0].path}/> : null
        },
        ...routes
      ]
    },
  ]);


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
