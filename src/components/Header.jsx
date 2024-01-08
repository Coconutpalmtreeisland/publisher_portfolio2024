import React, { useRef, useEffect } from 'react';
import { headerNav } from '../constants';
import { headerImg } from '../constants';
import { gsap, CustomEase } from 'gsap/all';

gsap.registerPlugin(CustomEase);
CustomEase.create("custom", "0.68, -0.6, 0.32, 1.6");

const Header = () => {
    let header = useRef(null);
    let listItem = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "custom" } });

        tl.fromTo(header.current, {
            autoAlpha: 0,
            yPercent: -100,
        }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.8,
        }, 6.5);

        listItem.current.forEach((item, index) => {
            tl.fromTo(item, {
                autoAlpha: 0,
                xPercent: 100,
                rotation: 360,
            }, {
                autoAlpha: 1,
                xPercent: 0,
                rotation: 0,
                duration: 2,
            }, index * 0.5 + 6.5); // 이 부분에서 delay가 아닌 timeline의 position 파라미터를 사용하여 애니메이션의 시작 시점을 결정합니다.
        });
    }, []);

    return (
        <header id="header" role='banner'>
            <div className="header__left" ref={header}>
                <h1><a href="/">Portfolio</a></h1>
                <nav>
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="header__right">
                {headerImg.map((idx) => (
                    <ul key={idx} ref={(el) => listItem.current[idx] = el}>
                        <li className={`img i${idx + 1}`}></li>
                        <li className={`img${idx + 1}-1`}></li>
                    </ul>
                ))}
            </div>
        </header>
    )
}

export default Header;
