import React from 'react';
import { useNavigate } from 'react-router-dom';

function DetailPage() {
  const navigate = useNavigate();
  const goUser = () => {
    navigate('/users');
  };

  const goBack = () => {
    navigate(-1);
  };

  const goDeleteHistory = () => {
    navigate('/users', { replace: true });
  };

  return (
    <>
      디테일 페이지 입니다.
      <button onClick={goUser}>유저페이지로 가지</button>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goDeleteHistory}>
        유저페이지로 가면서 히스토리 지우기
      </button>
    </>
  );
}
export default DetailPage;
