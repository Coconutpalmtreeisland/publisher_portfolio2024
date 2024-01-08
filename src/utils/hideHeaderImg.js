import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function hideHeaderImg() {
    gsap.registerPlugin(ScrollTrigger);

    const showHeaderImg = gsap.from(".header__right", {
        opacity: 0,
        xPercent: 50,
        paused: true,
        duration: 0.4,
        ease: "Power2.ease-In-Out"
    }).progress(1);

    ScrollTrigger.create({
        start: "bottom top",
        end: "bottom top",
        // markers: true,  // 디버깅을 위해 마커 추가
        onUpdate: (self) => {
            self.direction === -1 ? showHeaderImg.play() : showHeaderImg.reverse()
        }
    });

}