import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
    return (
        <div className="bg-black min-h-screen text-white">
            {/* 모든 페이지 상단에 공통으로 나타남 */}
            <NavBar />

            {/* 실제 페이지 내용(Home 또는 MovieDetail)이 갈아끼워지는 장소 */}
            <main>
                <Outlet />
            </main>

           
        </div>
    );
}