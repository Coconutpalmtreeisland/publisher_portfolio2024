export function polaroid() {
    let aboutRight = document.querySelector('.about__right');
    let overlay = document.querySelector('.overlay');

    aboutRight.style.transition = 'all 0.5s ease-in-out';

    aboutRight.addEventListener('mousemove', function (e) {
        // 마우스 좌표 값 확인
        let x = e.offsetX;  // 0~346 +346 --> -20deg 0 --> 20deg
        let y = e.offsetY;  // 0~336
        // console.log(x, y);

        overlay.style = `background-position : ${x / 100 + y / 100}%; filter : opacity(${x / 600}) brightness(1.2)`

        let rotateY = -20 / 346 * x + 20
        let rotateX = 20 / 336 * y - 20
        // -20 = 347a+b // 20 = 0a+b
        aboutRight.style = `transform : perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    })

    aboutRight.addEventListener('mouseout', function () {
        overlay.style.filter = 'opacity(0)';
        aboutRight.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
        aboutRight.style.transition = 'all 0.5s ease-in-out';
    });

}