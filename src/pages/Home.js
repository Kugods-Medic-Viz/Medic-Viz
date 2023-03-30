import { Link } from "react-router-dom";
import * as S from "../styles/HomeStyle";

function Home({ isLoggendIn }) {
  console.log(isLoggendIn);

  return (
    <>
      <S.HomeWrap>
        <S.LogoImg></S.LogoImg>
        <S.Logo></S.Logo>
        <S.BtnWrap>
          {/* 이 링크 태그는 라우팅 태그라서 태그명 변경하면 안됩니다! 주석은 확인하시면 지워도 괜찮아요 ! */}
          <Link to="/recording">
            <S.RecordBtn></S.RecordBtn>
          </Link>
          <S.AlgorithmBtn></S.AlgorithmBtn>
        </S.BtnWrap>
      </S.HomeWrap>
    </>
  );
}
export default Home;
