import { Link } from "react-router-dom";

function Home({ isLoggendIn }) {
  console.log(isLoggendIn);

  return (
    <>
      <div>
        <div>로고 영역</div>
        <div>
          {/* 이 링크 태그는 라우팅 태그라서 태그명 변경하면 안됩니다! 주석은 확인하시면 지워도 괜찮아요 ! */}
          <Link to="/recording">
            <button>진료 내용 기록하기</button>
          </Link>
          <button>질환별 진단 순서도</button>
        </div>
      </div>
      <div>서비스 소개 영역</div>
    </>
  );
}
export default Home;
