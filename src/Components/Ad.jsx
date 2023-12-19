import React from 'react';
import AdImage from '../Untitled.svg';
import styled from 'styled-components';

const AdImg = styled.div`
  width: 100%;
`;

export default function Ad({ isAd }) {
  return <AdImg>{isAd ? <img src={AdImage} alt="Ad" /> : null}</AdImg>;
}
