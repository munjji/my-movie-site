import React from 'react';
//import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/'; //베이직 path 경로를 선언해줌

function Movie(props) {
  const navigate = useNavigate();
  //const [_style, setStyle] = useState({ display: 'none' });

  const onClickMovieItem = () => {
    navigate(`/Movie/${props.title}`, {
      state: props,
    });
  };

  return (
    <div className="movie-container" onClick={onClickMovieItem}>
      <img src={IMG_BASE_URL + props.poster_path} alt="영화 포스터" />
      <div className="movie-info">
        <h4>{props.title}</h4>
        <span>{props.vote_average}</span>
      </div>
    </div>
  );
}

export default Movie;
