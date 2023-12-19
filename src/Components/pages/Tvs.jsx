import React from 'react';
import Tv from '../Tv/Tv';
import { tvs } from '../../tvDummy';

export default function Movies() {
  return (
    <div>
      <div className="movies-container">
        {tvs.results.map((item) => {
          return (
            <Tv
              key={item.id}
              name={item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
