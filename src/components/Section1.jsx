import React from 'react'
import { toolTips } from '../constants'

const Section1 = () => {
    return (
        <section id="section1">
            <div className="center">
                <h2 className="tooltip">
                    Incredorable
                    {toolTips.map((tip, idx) => (
                        <span key={idx} className={`sticker sticker0${idx + 1}`}>{tip.tag}</span>
                    ))}
                </h2>
                <p>
                    놀라운 성과와 사랑스러운 매력을 두루 갖춘 열정적인 개발자를 목표로<br />
                    밝은 에너지로 상황을 긍정적으로 바꾸며, 끊임없이 웹 프론트엔드 솔루션을 창조하기 위해 노력합니다.
                </p>
            </div>
        </section>
    )
}

export default Section1