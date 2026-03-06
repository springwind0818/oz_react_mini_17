

/* 만들어놓은 프로젝트에서 계속 수행해야함 메인브랜치로 이동한후 git checkout -b mission-1 이런식으로 만들고
그 브랜치로 이동해서 프로젝트를 수행함. 

git branch 브랜치이름 (그냥 브랜치만 만들고 이동은 안함)
# 예: git branch mission-1

git checkout -b 브랜치이름 (브랜치를 만들면서 바로 그 브랜치로 이동)

git branch (현재 브랜치 확인)



일단 오늘한거 json파일이 모여있는 data파일을 src파일에 넣고 import했음
컴포넌트 <movielist/>랑 <moviedetail/>를 만들어야함.

**********중요 **********
{movieList.results.map((movie) => (
이런식으로 최상단에 임포트한 무비리스트를 그 파일json에 최상단에 있는 results로 감싸서 .map((인자) => 
  수행할것들 
~~~

)
이런식으로 쫘라락 순서대로 나오게 코딩
그리고 왜 처음에 중괄호를 쓰는지 몰랐는데
리액트 코드에서 갑자기 등장하는 그 중괄호{ }! 처음 보면 참 생뚱맞아 보이죠?

결론부터 말씀드리면, 그 중괄호는 **"자바스크립트 모드로 전환!"**을 알리는 스위치입니다.

1. HTML(JSX) 영역과 JS 영역의 구분
리액트의 JSX 문법 안에서는 HTML 태그를 마음껏 쓸 수 있습니다. 하지만 그 안에서 자바스크립트의 기능(변수 사용, 함수 실행, 계산 등)을 쓰고 싶을 때는 반드시 **"나 지금부터 자바스크립트 쓸 거야!"**라고 리액트에게 알려줘야 합니다.

그 신호가 바로 **중괄호 { }**입니다.

중괄호가 없다면? 리액트는 {movieList.results.map...} 전체를 그냥 화면에 보여줄 **글자(텍스트)**로 오해합니다.

중괄호가 있다면? 리액트가 "아! 이건 글자가 아니라 자바스크립트 함수구나!"라고 인식해서 코드를 실행합니다.


*/
// 최상단은 results라고 되있고 title이 제목 vote average가 평점



import { Routes, Route } from "react-router-dom";
// 경로를 본인의 폴더 구조에 맞게 꼭 확인하세요!
import Layout from "./components/Layout";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MovieCard />} />
        <Route path="details" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;