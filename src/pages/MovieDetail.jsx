import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../apis/tmdb"; // 상세 정보를 가져오는 API 함수라고 가정

function MovieDetail() {
    // 1. URL에서 :id 부분을 가져옵니다 (예: /movie/123 이면 id는 123)
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            // 2. 받아온 id를 API 함수에 전달합니다.
            const data = await getMovieDetail(id);
            setMovie(data);
        };
        fetchDetail();
    }, [id]); // id가 바뀔 때마다 다시 호출

    if (!movie) return <div className="text-white">로딩 중...</div>;

    return (
        <div className="p-10 bg-black min-h-screen text-white">
            <div className="flex flex-col md:flex-row gap-10">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-[300px] rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                    <p className="text-yellow-400 text-xl mb-4">평점: ★ {movie.vote_average}</p>
                    <p className="text-gray-300 leading-relaxed text-lg">{movie.overview}</p>
                    <div className="mt-6">
                        <span className="bg-gray-700 px-3 py-1 rounded mr-2">개봉일: {movie.release_date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;