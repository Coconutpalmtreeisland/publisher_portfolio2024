export function line() {
    // https://velog.io/@seoyaon/Javascript-%EC%9E%90%EB%8F%99-%EB%A1%A4%EB%A7%81-%EB%B0%B0%EB%84%88-%EB%A7%8C%EB%93%A4%EA%B8%B0
    // 각 라인 복제본 생성
    let movingLines = document.querySelectorAll('.line p');

    movingLines.forEach((movingLine, index) => {
        movingLine.id = 'movingLineOriginal' + (index + 1);  // 아이디 부여

        let clone = movingLine.cloneNode(true);
        clone.id = 'movingLineClone' + (index + 1);
        movingLine.parentElement.appendChild(clone); // line 하위 자식으로 부착

        document.querySelector('#' + movingLine.id).style.left = '0px';
        document.querySelector('#' + clone.id).style.left = movingLine.offsetWidth + 'px';

        movingLine.classList.add('original');
        clone.classList.add('clone');

        // javascript로 마우스 감지하고 멈추기
        let lines = document.querySelectorAll('.line');

        lines.forEach(line => {
            line.addEventListener('mouseover', function () {
                let children = line.querySelectorAll('p');
                children.forEach(child => {
                    child.style.animationPlayState = 'paused';
                });
            });

            line.addEventListener('mouseout', function () {
                let children = line.querySelectorAll('p');
                children.forEach(child => {
                    child.style.animationPlayState = 'running';
                });
            });
        });
    });
}