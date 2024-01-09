import React from 'react';
import { phrases, toolTips } from '../constants';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Section1 = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.75
    });

    const animation = {
        initial: { y: "140%" },
        enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 8 + i * 0.2 } })
    }

    const tooltipRef = useRef([]);

    useEffect(() => {
        tooltipRef.current.forEach((tooltip, i) => {
            gsap.set(tooltip, { opacity: 0 });
            gsap.to(tooltip, {
                y: '-=10',
                duration: 0.3,
                yoyo: true,
                repeat: 3,
                delay: 7 + i * 0.1,
                onStart: () => gsap.to(tooltip, { opacity: 1, duration: 0.3 })
            });
        });
    }, []);

    const text = 'Incredorable'.split('').map((char, index) => (
        <div key={index} ref={el => tooltipRef.current[index] = el}>
            <span>{char}</span>
        </div>
    ));

    return (
        <section id="section1" ref={ref}>
            <div className="center">
                <h2 className="tooltip">
                    <div>
                        <motion.span>
                            {text}
                        </motion.span>
                    </div>
                    {toolTips.map((tip, idx) => (
                        <span key={idx} className={`sticker sticker0${idx + 1}`}>{tip.tag}</span>
                    ))}
                </h2>
                {phrases.map((phrase, index) => {
                    const words = phrase.split(' ').map((word, i) => `${word} `);
                    return <div key={index} className='lineMask'>
                        {words.map((word, i) => (
                            <motion.p
                                key={i}
                                custom={i}
                                variants={animation}
                                initial="initial"
                                animate={inView ? "enter" : ""}
                            >{word}</motion.p>
                        ))}
                    </div>
                })}
            </div>
        </section>
    )
}

export default Section1;