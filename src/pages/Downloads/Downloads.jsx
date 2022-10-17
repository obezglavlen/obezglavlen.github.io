import React, { useEffect, useRef, useState } from 'react';
import DownloadCard, {
  DownloadCardsWrapper
} from '../../components/DownloadCard';
import { Navigate, useRoutes } from 'react-router-dom';
import TabBar from '../../components/TabBar';
import SearchBar from '../../components/SearchBar';

const Downloads = () => {
  const renderCount = useRef(0);
  const timer = useRef(null);
  const [search, setSearch] = useState('');
  const [downloadItems, setDownloadItems] = useState({});

  renderCount.current = renderCount.current + 1;

  useEffect(() => {
    fetch('/assets/data/downloads-items.json')
      .then(response => response.json())
      .then(data => setDownloadItems(data));
  }, []);

  const handleSearchInput = (value) => {
    clearTimeout(timer.current);
    timer.current = null;
    timer.current = setTimeout(() => {
      setSearch(value);
    }, 200);
  };


  const routes = Object.keys(downloadItems).map(key => ({
    title: key.charAt(0).toUpperCase() + key.slice(1),
    path: key,
    element: <DownloadCardsWrapper>
      {(() => {
        const cards = downloadItems[key].filter((item) => item.title.toLowerCase().includes(search)).map((item, index) =>
          <DownloadCard
            title={item.title}
            description={item.description}
            img={item.img}
            externalUrl={item.externalUrl}
            internalUrl={item.internalUrl}
            key={index}
          />);
        if (!cards.length) {
          return <h1 style={{
            textAlign: 'center',
            display: 'block',
            width: '100%'
          }}>Not
            found!</h1>;
        }
        return cards;
      })()}
    </DownloadCardsWrapper>
  }));

  const routeComponents = useRoutes([{
    path: '/', children: [{
      index: true,
      element: renderCount.current > 1 ? <Navigate to={routes[0].path}/> : null
    }, ...routes]
  },]);


  return (<>
      <TabBar items={routes}/>
      <main>
        <SearchBar setter={handleSearchInput}/>
        {routeComponents}
      </main>
    </>
    // TODO
  );
};

export default Downloads;
