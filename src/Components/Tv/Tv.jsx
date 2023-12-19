import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/'; //베이직 path 경로를 선언해줌

function Tv(props) {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/Tv/${props.name}`, {
      state: props,
    });
  };

  return (
    <div className="movie-container" onClick={onClickMovieItem}>
      <img src={IMG_BASE_URL + props.poster_path} alt="티비 프로그램 포스터" />
      <div className="movie-info">
        <h4>{props.name}</h4>
        <span>{props.vote_average}</span>
      </div>
    </div>
  );
}

export default Tv;
