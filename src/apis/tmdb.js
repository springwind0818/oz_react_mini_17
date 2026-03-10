const token = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
    }
};

// 인기 영화 리스트
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?language=ko-KR&page=1`, options);
    return await response.json();
};

// 영화 상세 정보
export const getMovieDetail = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?language=ko-KR`, options);
    return await response.json();
};

// 🔥 추가: 영화 검색 (검색어 기반)
export const searchMovies = async (query) => {
    if (!query) return null;
    const response = await fetch(`${BASE_URL}/search/movie?query=${query}&include_adult=false&language=ko-KR&page=1`, options);
    return await response.json();
};