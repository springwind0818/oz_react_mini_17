import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);  // 의존성 배열에따라 실행되는 부분
        }, delay);  // setDebouncedValue가 딜레이 시간 이후에 debouncedValue가 Value값으로 바꿔준다

        return () => {
            clearTimeout(handler);
        };  //컴포넌트가 언마운트될때마다 실행되는부분 - 클린업 함수
    }, [value, delay]);

    return debouncedValue;
};

// useDebounce(inputValue, 500)