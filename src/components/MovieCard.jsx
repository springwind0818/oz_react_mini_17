// 사진(포스트), 영화제목, 평점 등을 보여주는 컴포넌트
import movieList from "../data/movieListData.json";
import { useNavigate } from "react-router-dom";

function MovieCard() {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate('/details');
  };

  return (
    <div className="p-6 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-white text-center">인기 영화 목록</h1>

      {/* 전체를 감싸는 그리드: 한 줄에 여러 개가 보이도록 설정 */}
      <div className="flex flex-wrap gap-8 justify-center">
        {movieList.results.map((movie) => (
          <div
            key={movie.id}
            onClick={handleMovieClick}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-[400px]" // 카드 전체 너비 고정
          >
            {/* 이미지 영역: 요청하신 400x300 크기 적용 */}
            <div className="w-[400px] h-[300px] overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover" // 이미지가 400x300에 꽉 차게 함
              />
            </div>

            {/* 텍스트 정보 영역 */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-white mb-2 truncate">{movie.title}</h2>

              <div className="flex items-center mb-2">
                <span className="text-yellow-400">★</span>
                <p className="ml-1 text-sm text-white">{movie.vote_average}</p>
              </div>

              {/* 줄거리: 너무 길면 3줄만 보여줌 */}
              <p className="text-sm text-gray-400 line-clamp-3">
                {movie.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* . flex (도와줘, 유연한 박스!)
의미: 이 요소를 "Flex Container"로 만듭니다.

효과: 기본적으로 자식 요소(영화 카드들)를 가로로 한 줄로 나란히 세웁니다. 원래 div는 위에서 아래로 쌓이는데, 이걸 옆으로 서게 만드는 시작점이에요.

2. flex-wrap (자리가 없으면 다음 줄로!)
의미: "줄 바꿈을 허용한다"는 뜻입니다.

효과: 이게 없으면 영화 카드가 100개든 1000개든 무조건 한 줄에 다 넣으려고 해서 카드가 찌그러지거나 화면 밖으로 삐져나갑니다.

한 줄에 여러 개가 보이는 이유: 화면 가로 폭이 꽉 차면, 남은 카드들은 자동으로 다음 줄로 내려가서 다시 가로로 배치됩니다. 그래서 결과적으로 "여러 줄에 걸쳐 한 줄에 여러 개"가 보이게 되는 거죠.

3. gap-8 (사이 간격 띄우기)
의미: 자식 요소(카드)들 사이의 간격을 2rem (약 32px)만큼 줍니다.

효과: 카드들이 서로 딱딱 붙어 있으면 보기 흉하죠? 카드 사이사이에 일정한 여백을 줘서 깔끔하게 보이게 합니다. 가로 간격과 세로 간격 모두에 적용됩니다.

4. justify-center (가운데로 모여!)
의미: 가로 방향 정렬을 "중앙"으로 합니다.

효과: 화면 왼쪽 끝에 카드들이 쏠려 있으면 불균형해 보일 수 있습니다. 이 속성을 쓰면 카드가 2개든 3개든 화면 정중앙을 기준으로 예쁘게 배치됩니다. */

export default MovieCard;