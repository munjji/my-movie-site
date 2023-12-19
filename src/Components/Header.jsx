import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          style={{
            width: '200px',
            height: '20px',
            display: 'block',
            margin: '17px -30px 19px 170px',
          }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <ul>
        <li>
          <Link to="/Movie" style={{ textDecoration: 'none', color: 'white' }}>
            영화
          </Link>
        </li>
        <li>
          <Link to="/Tv" style={{ textDecoration: 'none', color: 'white' }}>
            TV 프로그램
          </Link>
        </li>
        <li>
          <Link
            to="/Celebrity"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            인물
          </Link>
        </li>
        <li>
          <Link to="/LoginPage">
            <button
              style={{
                backGroundColor: 'gray',
                color: 'black',
                borderRadius: '13px',
                fontWeight: 'bold',
                width: '70px',
                height: '23px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              로그인
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
