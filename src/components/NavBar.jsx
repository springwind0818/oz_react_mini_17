import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';

export default function NavBar() {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const debouncedSearchTerm = useDebounce(keyword, 1000); 
    const isDebouncing = keyword.trim() !== debouncedSearchTerm.trim() && keyword.trim().length > 0;

    useEffect(() => {
        const term = debouncedSearchTerm.trim();
        
        // 핵심 조건: 검색어가 2글자 이상이고, 
        // 현재 내가 '검색 결과'를 보려고 하는 상황(또는 메인/상세에서 검색 시작)일 때만 이동
        if (term.length >= 2 && !location.pathname.startsWith('/movie')) {
            navigate(`/search?query=${term}`);
        } else if (term.length === 0 && location.pathname === '/search') {
            // 검색어를 다 지우면 메인으로 보내기 (선택 사항)
            navigate('/');
        }
    }, [debouncedSearchTerm, navigate, location.pathname]); 
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg sticky top-0 z-50">
            <div className="text-2xl font-bold text-red-600">
                <Link to="/" onClick={() => setKeyword('')}>오즈 무비</Link>
            </div>

            <div className="flex flex-1 max-w-md mx-4 relative">
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="영화 제목을 입력하세요..."
                    className="w-full px-4 py-2 text-black bg-white outline-none focus:ring-2 focus:ring-red-500 rounded"
                />
                
                {isDebouncing && (
                    <div className="absolute right-2 top-2 text-xs text-gray-500 animate-pulse bg-white px-2 py-1">
                        대기 중...
                    </div>
                )}
            </div>

            <div className="flex gap-4">
                <Link to="/login" className="text-gray-300 hover:text-white transition">로그인</Link>
                <Link to="/signup" className="text-gray-300 hover:text-white transition">회원가입</Link>
            </div>

            <div className="w-48 hidden md:block"></div>
        </nav>
    );
}