import React from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

function UserPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClick = () => {
    setSearchParams((prev) => ({
      ...prev,
      userId: 15,
    }));
  };
  return (
    <>
      유저 페이지 입니다
      <div>
        userId:
        {searchParams.get('userId')}
      </div>
      <button onClick={onClick}>유저 아이디 변경</button>
    </>
  );
}
export default UserPage;
