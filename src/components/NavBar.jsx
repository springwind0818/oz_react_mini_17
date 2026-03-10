import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        // 핵심 수정 부분: 공백 제거 후 길이를 체크합니다.
        const trimmedKeyword = keyword.trim();

        if (trimmedKeyword.length >= 2) {
            // 2글자 이상일 때만 검색 페이지로 이동!
            navigate(`/search?query=${trimmedKeyword}`);
            setKeyword('');
        } else if (trimmedKeyword.length === 1) {
            // 1글자만 입력했을 때 알려주기 (선택 사항)
            alert('검색어는 2글자 이상 입력해주세요!');
        }
    };

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg">
            <div className="text-2xl font-bold text-red-600">
                <Link to="/">오즈 무비</Link>
            </div>

            <form onSubmit={handleSearch} className="flex flex-1 max-w-md mx-4">
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}

                    className="w-full px-4 py-2 text-black bg-white outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                    type="submit"
                    className="bg-red-600 px-6 py-2 font-bold hover:bg-red-700 transition"
                >
                    검색
                </button>
            </form>

            {/* 오른쪽 빈 영역: 왼쪽 로고 영역과 똑같은 너비(w-48)를 주어 좌우 균형을 맞춥니다. */}
            <div className="flex-shrink-0 w-48 hidden md:block">
                {/* 만약 나중에 로그인 버튼이나 홈 버튼을 넣고 싶다면 여기에 넣으세요! */}
            </div>
        </nav>
    );
}