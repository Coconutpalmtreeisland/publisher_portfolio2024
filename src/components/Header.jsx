import React from 'react'
import { headerNav } from '../constants'
import { headerImg } from '../constants'

const Header = () => {
    return (
        <header id="header" role='banner'>
            <div className="header__left">
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
                    <ul key={idx}>
                        <li className={`img i${idx + 1}`}></li>
                        <li className={`img${idx + 1}-1`}></li>
                    </ul>
                ))}
            </div>
        </header>
    )
}

export default Header