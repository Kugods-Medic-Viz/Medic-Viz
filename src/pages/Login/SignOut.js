import { Link, useNavigate } from "react-router-dom";
import { fbAuth } from "../../firebase";

function SignOut({ isLoggendIn }) {
  console.log(isLoggendIn);
  const navigate = useNavigate();
  const onSignOutClick = () => {
    fbAuth.signOut();
    navigate("/");
  };

  return (
    <>
      {isLoggendIn === false ? (
        <div>
          [비로그인 상태]
          <ul>
            <li>
              <Link to="/signin">로그인하러 가기</Link>
            </li>
            <li>
              <Link to="/signup">회원가입하러 가기</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <p>로그인 상태</p>
          <button onClick={onSignOutClick}>로그아웃 하기</button>
        </div>
      )}
    </>
  );
}
export default SignOut;
