import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  useEffect(() => {
    const handler = (e) => {
      console.log(e);
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);
  return (
    <>
      메인 페이지 입니다.
      <Link to="/users">유저 페이지로</Link>
      <Link to="/detail">디테일 페이지로</Link>
    </>
  );
}
export default MainPage;
