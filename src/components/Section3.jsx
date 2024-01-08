import React from 'react'
import { siteText } from '../constants'

const Section3 = () => {
    return (
        <section id="section3">
            <div className="container">
                <div className="about__tag"><span></span>Work List</div>
                <div className="about__left">
                    사용자 <em>경험 중심의 디자인</em> 과 <strong>실용적인 기능</strong> 제공을 목표로 하였습니다. 이를 통해 사용자들에게 <b>효과적인 정보 접근성과 우수한
                        서비스 이용 경험을 제공</b>하고자 하였습니다.
                </div>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <React.Fragment key={key}>
                            <div className={`site__img s${key + 1} card-box`}>
                                <img src={site.img} alt={site.title} />
                            </div>
                            <div className={`site s${key + 1} card-box`}>
                                <h3>{site.title}</h3>
                                <p>{site.content}</p>
                                <div className="tag">
                                    <div>
                                        <span>{site.time}</span>
                                        <span>{site.tag[0]}</span>
                                        <span>{site.tag[1]}</span>
                                        <span>{site.tag[2]}</span>
                                    </div>
                                    <div>
                                        <a href={site.view} target="_blank" rel="noopener noreferrer"><span>View</span></a>
                                        <a href={site.code} target="_blank" rel="noopener noreferrer"><span>Code</span></a>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section3