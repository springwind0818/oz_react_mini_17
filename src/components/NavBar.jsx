import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg sticky top-0 z-50">
            <div className="text-2xl font-bold text-red-600">
                <Link to="/">오즈 무비</Link>
            </div>
            <div className="space-x-4">
                <Link to="/" className="hover:text-red-400">홈</Link>
                {/* 상세정보 링크는 나중에 특정 ID로 연결되게 수정할 수 있어 일단 유지합니다 */}
                <Link to="/details" className="hover:text-red-400">영화 상세정보</Link>
            </div>
        </nav>
    );
}