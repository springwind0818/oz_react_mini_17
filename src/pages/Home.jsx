import { useEffect, useState } from "react";
import { getPopularMovies } from "../apis/tmdb";
import { useNavigate } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadMovies = async () => {
            const data = await getPopularMovies();

            if (data && data.results) {
                // 🔥 핵심: adult 속성이 false인 영화만 필터링합니다.
                const safeMovies = data.results.filter((movie) => movie.adult === false);

                // 필터링된 깨끗한 데이터만 상태에 저장!
                setMovies(safeMovies);
            }
        };

        loadMovies();
    }, []);

    return (
        <div className="p-6 bg-black min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-white text-center">인기 영화 목록 (전체 관람가)</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        onClick={() => navigate(`/movie/${movie.id}`)}
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-[400px] cursor-pointer hover:scale-105 transition-all"
                    >
                        <div className="w-[400px] h-[300px] overflow-hidden">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-white mb-2 truncate">{movie.title}</h2>
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-400">★</span>
                                <p className="ml-1 text-sm text-white">{movie.vote_average}</p>
                            </div>
                            <p className="text-sm text-gray-400 line-clamp-3">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default Home;