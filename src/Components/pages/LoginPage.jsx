import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [loading, setLoading] = useState(false);
  const [, setStatus] = useState();

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const onClickLogin = async (e) => {
    e.preventDefault();

    if (!id || !pw) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:8000/user/login`, {
        id,
        pw,
      });

      if (response.status === 200) {
        console.log('성공 : ', response.status);
        alert('로그인 성공');
        console.log(response.data);
        localStorage.setItem('token', response.data.result.AccessToken);
      }
      console.log(response.status);
      setStatus(response.status);

      setTimeout(() => {
        setLoading(false);
        navigate('/');
      }, 1500);
    } catch (error) {
      console.log('error: ', error.response.status);
      if (error.response.status === 400) {
        alert('로그인 실패');
        console.log('body 값이 비어있습니다.', error.response.status);
      } else if (error.response.status === 401) {
        alert('존재하지 않는 id입니다.');
        console.log('존재하지 않는 id입니다.');
      } else if (error.response.status === 402) {
        alert('비밀번호가 틀렸습니다.');
        console.log('비밀번호가 틀렸습니다.');
      } else {
        console.log('알 수 없는 에러입니다.');
      }
    }
  };

  return (
    <div className="page-container">
      <LoginWrap>
        <TitleWrap>아이디와 비밀번호를 입력해주세요</TitleWrap>
        <ContentWrap>
          <div>
            <EmailText>아이디</EmailText>
            <div>
              <EmailInput
                type="email"
                placeholder="test@gmail.com"
                value={id}
                onChange={onChangeId}
              />
            </div>
          </div>
          <PasswordWrap>
            <PasswordText>비밀번호</PasswordText>
            <div>
              <PasswordInput
                type="password"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요"
                value={pw}
                onChange={onChangePw}
              />
            </div>
          </PasswordWrap>
        </ContentWrap>
        <OkButton onClick={onClickLogin} disabled={loading}>
          로그인
        </OkButton>
      </LoginWrap>
    </div>
  );
}
const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;

  left: 35%;
  trasform: translate(-50%, 0);

  overflow: hidden;
  z-index: -999;
`;
const TitleWrap = styled.div`
  margin-top: 130px;
  font-size: 30px;
  font-weight: bold;
`;
const ContentWrap = styled.div`
  margin-top: 30px;
`;
const EmailText = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const PasswordText = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const EmailInput = styled.input`
  display: flex;
  border-radius: 10px;
  border: 1px solid #e2e0e0;
  padding: 18px;
  margin-top: 8px;
  background-color: white;
  width: 460px;

  &:focus-within {
    border: 1px solid purple;
    outline: none;
  }
  &::placeholder {
    color: #dadada;
  }
`;
const PasswordInput = styled.input`
  display: flex;
  border-radius: 10px;
  border: 1px solid #e2e0e0;
  padding: 18px;
  margin-top: 8px;
  background-color: white;
  width: 460px;

  &:focus-within {
    border: 1px solid purple;
    outline: none;
  }
  &::placeholder {
    color: #dadada;
  }
`;
const PasswordWrap = styled.div`
  margin-top: 30px;
`;
const OkButton = styled.button`
  border-radius: 20px;
  height: 50px;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  background-color: black;
`;
