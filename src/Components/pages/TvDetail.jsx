import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../Tv/Tv';

export default function TvDetail() {
  const { name } = useParams();
  const { state } = useLocation();

  return (
    <div className="page-container">
      <div style={{ display: 'flex' }}>
        <img
          style={{ width: '300px', height: '450px' }}
          src={IMG_BASE_URL + state.poster_path}
          alt="티비 포스터 이미지"
        />
        <div style={{ fontSize: '32px' }}>{name}</div>
      </div>
    </div>
  );
}
