import React from 'react'
import { lineText } from '../constants'

const Section2 = () => {
    return (
        <section id="section2">
            <div className="container">
                <div className="about__tag"><span></span>About Me</div>
                <div className="about__wrap">
                    <div className="about__left">
                        지속적인 성장을 지향하는 개발자로서, 저는 <em>최신 기술 트렌드에</em> 발맞춰 항상 발전하고자 노력하고 있습니다. <strong>사용자 경험을 </strong> 최우선으로 여기며, 모든 프로젝트에 심미적이고 기능적인 접근을 취함으로써 <b>디지털 사용자 경험의 질을 높이는데 중점을 두고 있습니다</b>.
                    </div>
                    <div className="about__right">
                        <div className="overlay"></div>
                        <div className="polaroidphoto">
                            <div className="polarimage"></div>
                            <div className="polartitle">Lee hyemin</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {lineText.map((text, key) => (
                    <div className={`line line${key + 1}`} key={key}>
                        <p>{text.text}<span></span>{text.text}<span></span>{text.text}<span></span></p>
                        <p>{text.text}<span></span>{text.text}<span></span>{text.text}<span></span></p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Section2