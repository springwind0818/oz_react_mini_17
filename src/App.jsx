import { Routes, Route } from "react-router-dom";

// 가독성을 위해 컴포넌트들을 import 합니다.
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      {/* 1. 공통 레이아웃 (헤더, 푸터 등)을 감싸는 상위 라우트 */}
      <Route path="/" element={<Layout />}>

        {/* 2. 메인 페이지: 주소가 "/"일 때 Home 컴포넌트를 보여줍니다. */}
        <Route index element={<Home />} />

        {/* 3. 상세 페이지: ":id"는 변수 역할을 합니다. 
               Home에서 navigate(`/movie/${movie.id}`)로 보내면 이 라우트가 잡아냅니다. */}
        <Route path="movie/:id" element={<MovieDetail />} />

      </Route>
    </Routes>
  );
}

export default App;