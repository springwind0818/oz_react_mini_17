// src/apis/tmdb.js (파일을 새로 만드셔도 되고, Home.jsx 상단에 두셔도 됩니다)

const token = import.meta.env.VITE_TMDB_TOKEN;

export const getPopularMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
            // 요청 명세서 작성
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options);

        // 응답이 성공(200번대)이 아닐 경우 에러 처리
        if (!response.ok) {
            throw new Error('데이터를 불러오는데 실패했습니다.');
        }



        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
    }
};

export const getMovieDetail = async (id) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`, options);
        if (!response.ok) throw new Error('상세 데이터를 불러오는데 실패했습니다.');
        return await response.json();
    } catch (error) {
        console.error("Detail API Error:", error);
    }
};