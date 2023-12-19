import React, { useState } from 'react';
import styled from 'styled-components';

const LoginButton = styled.button`
  background-color: white;
  border-radius: 13px;
  margin-right: 20px;
  border: none;
  width: 70px;
  height: 23px;
  font-weight: bold;
`;

const LoginContainer = styled.div`
  font-size: 14px;
  color: white;
`;

export default function LoginControl() {
  const [isLogin, setIsLogin] = useState(true);

  function handleLoginClick() {
    setIsLogin(!isLogin);
  }

  function handleLogoutClick() {
    setIsLogin(!isLogin);
  }

  return (
    <div>
      {isLogin ? (
        <LoginContainer>
          <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
          {!isLogin ? '환영합니다!' : '로그인 해주세요!'}
        </LoginContainer>
      ) : (
        <LoginContainer>
          <LoginButton onClick={handleLogoutClick}>로그아웃</LoginButton>
          {!isLogin ? '환영합니다!' : '로그인 해주세요!'}
        </LoginContainer>
      )}
    </div>
  );
}
