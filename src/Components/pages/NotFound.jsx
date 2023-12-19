import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding: 32px 0;
`;

const NotPage = styled.div`
  margin-top: 64px;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const NotAdress = styled.div`
  font-size: 32px;
  line-height: 1.6;
`;

const GoMain = styled.div`
  font-size: 30px;
  line-height: 1.6;
  color: red;
`;

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <ErrorContainer className="page-container">
      <NotPage>해당 페이지를 찾지 못했습니다.</NotPage>
      <NotAdress>
        주소가 잘못되었거나 더 이상 유효하지 않는 주소입니다.
      </NotAdress>
      <GoMain onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        메인 페이지로 이동
      </GoMain>
    </ErrorContainer>
  );
}
