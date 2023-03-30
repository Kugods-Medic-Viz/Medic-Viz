import { Link } from "react-router-dom";
import * as S from "../styles/NavStyle";

function Nav({ isLoggedIn, isHome }) {
  return (
    <>
      <S.Nav navColor={isHome === true ? "nav white" : "nav white"}>
        <S.MenuBtn></S.MenuBtn>
        <S.MenuIcon></S.MenuIcon>
          {isLoggedIn === false ? (
            <Link to="/signup">
              <S.StartBtn></S.StartBtn>
            </Link>
          ) : (
            <S.LoggedinBtn></S.LoggedinBtn>
          )}
      </S.Nav>
    </>
  );
}

export default Nav;
