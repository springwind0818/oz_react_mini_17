import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../apis/tmdb";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const data = await getMovieDetail(id);
                setMovie(data);
            } catch (error) {
                console.error("데이터 로드 실패:", error);
            }
        };
        fetchDetail();
    }, [id]);

    // 로딩 중일 때 화면
    if (!movie) {
        return <div className="flex justify-center items-center h-screen text-white text-2xl">로딩 중... 🍿</div>;
    }

    return (
        /* z-index를 높이고 relative를 주어 NavBar 밑에 확실히 보이게 함 */
        <div className="relative z-10 w-full min-h-screen bg-black text-white p-6 md:p-20">
            <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
                {/* 포스터 영역 */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-[300px] rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-gray-700"
                    />
                </div>

                {/* 정보 영역 */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                        {movie.title}
                    </h1>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-yellow-400 text-2xl font-bold">★ {movie.vote_average.toFixed(1)}</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-300">{movie.release_date}</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-300">{movie.runtime}분</span>
                    </div>

                    <p className="text-lg leading-relaxed text-gray-200 bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                        {movie.overview || "줄거리 정보가 없습니다."}
                    </p>
                    
                    <div className="mt-8 flex gap-3">
                        {movie.genres?.map(genre => (
                            <span key={genre.id} className="px-4 py-1 bg-red-600/20 text-red-500 rounded-full border border-red-600/30 text-sm font-semibold">
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;