import { Link } from "react-router-dom";
import * as S from "../styles/NavStyle";

function Nav({ isLoggedIn, isHome }) {
  return (
    <>
      <S.Nav navColor={isHome === true ? "nav sky" : "nav white"}>
        <div>메뉴 아이콘</div>
        <div>중앙 아이콘</div>
        <div>
          {isLoggedIn === false ? (
            <Link to="/signup">
              <button>시작하기</button>
            </Link>
          ) : (
            <button>김구글</button>
          )}
        </div>
      </S.Nav>
    </>
  );
}

export default Nav;
