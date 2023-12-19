import React from 'react';
import Movie from '../Movie/Movie';
import { movies } from '../../movieDummy';

export default function Movies() {
  return (
    <div>
      <div className="movies-container">
        {movies.results.map((item) => {
          return (
            <Movie
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
