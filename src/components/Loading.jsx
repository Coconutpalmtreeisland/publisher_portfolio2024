import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000); // 4초 후에 실행

        return () => {
            clearTimeout(timer); // 컴포넌트 unmount 시, 타이머 제거
        };
    }, []);

    if (!isVisible) {
        return null; // isVisible이 false라면 아무것도 렌더링하지 않음
    }

    return (
        <section id='loading'>
            <div className='loading'>
                <span data-text="L">L</span>
                <span data-text="o">o</span>
                <span data-text="a">a</span>
                <span data-text="d">d</span>
                <span data-text="i">i</span>
                <span data-text="n">n</span>
                <span data-text="g">g</span>
            </div>
        </section>
    );
}

export default Loading;
