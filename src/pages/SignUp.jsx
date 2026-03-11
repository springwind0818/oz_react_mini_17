import React from 'react';

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-3xl font-bold mb-8">회원가입</h1>
            <form className="flex flex-col gap-4 w-full max-w-sm">
                <input type="text" placeholder="이름" className="p-3 rounded bg-gray-800 border border-gray-700 outline-none focus:border-red-600" />
                <input type="email" placeholder="이메일" className="p-3 rounded bg-gray-800 border border-gray-700 outline-none focus:border-red-600" />
                <input type="password" placeholder="비밀번호" className="p-3 rounded bg-gray-800 border border-gray-700 outline-none focus:border-red-600" />
                <button className="bg-red-600 p-3 rounded font-bold hover:bg-red-700 transition">가입하기</button>
            </form>
        </div>
    );
};

export default SignUp;