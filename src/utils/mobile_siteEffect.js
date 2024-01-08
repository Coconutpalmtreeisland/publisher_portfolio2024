import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function mobileEffect() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(".card-box", {
        scrollTrigger: {
          trigger: ".card-box",
          start: "top bottom", // 요소가 뷰포트에 들어왔을 때
          end: "bottom top", // 요소가 뷰포트에서 나갔을 때
          scrub: true
        },
        opacity: 0
      });
}