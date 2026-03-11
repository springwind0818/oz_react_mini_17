import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate} from 'react-router-dom';
import { searchMovies } from '../apis/tmdb';



const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('query');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResults = async () => {
            if (!keyword) return;

            setIsLoading(true); // 로딩 시작
            try {
                const data = await searchMovies(keyword);
                console.log("API 응답 결과:", data)
                if (data && data.results) {
                    console.log("세팅할 데이터:", data.results);
                    setMovies(data.results);
                }
            } catch (error) {
                console.error("검색 중 오류 발생:", error);
            } finally {
                setIsLoading(false); // 로딩 종료 (성공하든 실패하든)
            }
        };
        fetchResults();
    }, [keyword]);

    return (
        <div id="search" className="p-6 bg-black min-h-screen text-white">
            <h2 className="text-xl mb-4">"{keyword}" 검색 결과</h2>
            
            {isLoading ? (
                // 로딩 중일 때 보여줄 화면
                <div className="text-center mt-20 text-2xl animate-bounce">
                    영화를 찾는 중입니다... 🍿
                </div>
            ) : (
                <div className="flex flex-wrap gap-4 justify-center">
                    {movies.length > 0 ? (
                        movies.map((movie) => {
                            return <div key={movie.id}
                            onClick={()=> navigate(`/movie/${movie.id}`)}
                            className='w-[200px] h-[300px] bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all' >
                                {/* 1. 포스터 이미지 추가 */}
                                <img
                                    src={movie.poster_path 
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                                        : 'https://via.placeholder.com/500x750?text=No+Image'}
                                    alt={movie.title}
                                    className="rounded-lg shadow-lg"
                                />
                                {/* 2. 영화 제목 추가 */}
                                <p className="mt-2 text-sm font-bold text-center truncate">
                                    {movie.title}
                                </p>
                            </div>
})
                    ) : (
                        <p>검색 결과가 없습니다.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchPage;