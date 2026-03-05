// import movieDetail from '../data/movieDetailData.json'


// function MovieDetail() {
//     return (
//         <>
//             <div>
//                 <h1 className="text-3xl font-bold mb-8">영화 상세 정보</h1>
//             </div>

//             <div>{movieDetail.id}
//                 <div key={movie.belongs_to_collection.id}>
//                     <img src={movie.belongs_to_collection.poster_path} alt={movie.belongs_to_collection.name} />
//                     <h2 className="font-bold text-lg truncate">{movie.belongs_to_collection.name}</h2>
//                     <span className="text-yellow-400">★</span>
//                     <span className="ml-1 text-sm">{movie.vote_average}</span>


//                     <p className="text-sm text-gray-400">{movie.overview}</p>
//                     <div className="mt-2 flex items-center">


//                     </div>
//                 </div>
//             </div>





//         </>
//     );
// }

// export default MovieDetail;


import movieDetail from '../data/movieDetailData.json';

function MovieDetail() {
    // 데이터 구조를 보면 movieDetail 자체가 하나의 영화 객체입니다.
    return (
        <div className="p-8 text-white bg-gray-900 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">영화 상세 정보</h1>

            {/* movie 대신 movieDetail을 직접 사용합니다 */}
            <div className="flex flex-col md:flex-row gap-8">

                {/* 영화 포스터 */}
                <img
                    className="w-[300px] rounded-lg shadow-xl"
                    src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                    alt={movieDetail.title}
                />

                {/* 영화 정보 */}
                <div>
                    <h2 className="text-4xl font-bold mb-4">{movieDetail.title}</h2>

                    <div className="flex items-center mb-4">
                        <span className="text-yellow-400 text-2xl">★</span>
                        <span className="ml-2 text-xl">{movieDetail.vote_average}</span>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                        {movieDetail.overview}
                    </p>

                    <div className="text-gray-400">
                        <p>개봉일: {movieDetail.release_date}</p>
                        {/* 장르는 배열이므로 map을 써서 이름을 쉼표로 연결해줍니다 */}
                        <p>장르: {movieDetail.genres.map(g => g.name).join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;