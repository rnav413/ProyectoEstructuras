import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {NuevoComentario} from './nuevoComentario';
import {Post} from './post';

export const MainScroll = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Aquí puedes hacer una petición a tu API para obtener los primeros elementos
    // y añadirlos al estado con setItems
  }, []);

  const fetchMoreData = () => {
    // Aquí puedes hacer otra petición a tu API para obtener más elementos
    // y añadirlos al estado con setItems
    // Si no hay más elementos, debes llamar a setHasMore(false)
  };

  return (
    <div className="main-page">
      <div className="columns-container">
        <div className="left-column"></div>
        <div className="center-column">
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more items</p>}
          >
            {items.map((item) => (
              <div key={item.id}>{/* Renderiza aquí los elementos */}</div>
            ))}
            <NuevoComentario/>
            <Post/>
          </InfiniteScroll>
        </div>
        <div className="right-column"></div>
      </div>
    </div>
  );
}