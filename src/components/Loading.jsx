import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [countdown, setCountdown] = useState(5); // 카운트다운 초기값 설정

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000); // 5초 후에 실행

        const countdownTimer = setInterval(() => {
            setCountdown((countdown) => countdown - 1);
        }, 1000); // 1초마다 카운트다운 감소

        return () => {
            clearTimeout(timer); // 컴포넌트 unmount 시, 타이머 제거
            clearInterval(countdownTimer); // 컴포넌트 unmount 시, 카운트다운 제거
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
                {/* 카운트다운 추가 */}
                <div className='countdown'>{countdown}</div>
            </div>
        </section>
    );
}

export default Loading;
