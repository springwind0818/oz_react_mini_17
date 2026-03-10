import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchMovies } from '../apis/tmdb'; // 아까 만든 searchMovies 함수를 가져옵니다.

const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // URL에서 ?query=검색어 가져오기
    const keyword = searchParams.get('query'); //query=손오공 이면 손오공을 가져온다
     console.log("keyword", keyword)
    useEffect(() => {
        const fetchResults = async () => {
            if (!keyword) return; // keyword가 null혹은 ''이런식으로 공백상태면 아무것도 하지마!! 라고 설정해두는것

            try {                                     //비동기함수 try catch문, 일단 실행해!!
                // tmdb.js에 만든 함수를 호출합니다.
                const data = await searchMovies(keyword); //searchMovies 함수를 호출하고 그 값을 data에 저장한다
                console.log('data', data)
                if (data && data.results) { //data가 존재하고 data.results가 존재하면
                    setMovies(data.results); // movies를 data.results로 설정한다
                    
                }
            } catch (error) {
                console.error("검색 중 오류 발생:", error);
            }
        };
        fetchResults();
    }, [keyword]);
console.log('movies', movies)
    return (
        <div className="p-6 bg-black min-h-screen text-white">
            <h2 className="text-xl mb-4">"{keyword}" 검색 결과</h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        onClick={() => navigate(`/movie/${movie.id}`)}
                        className="w-[200px] cursor-pointer hover:opacity-80"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded-lg"
                        />
                        <p className="mt-2 text-sm font-bold truncate">{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;