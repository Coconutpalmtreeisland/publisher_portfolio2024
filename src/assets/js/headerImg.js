export function headerImg() {
    let headerImg = document.querySelector(".header__right");
    let imgs = headerImg.querySelectorAll('.img');

    imgs.forEach((img, index) => {
        img.addEventListener("mouseover", () => {
            headerImg.querySelector('.img.i' + (index + 1)).classList.add("on");
        });

        img.addEventListener("mouseout", () => {
            headerImg.querySelector('.img.i' + (index + 1)).classList.remove("on");
        });
    });
}
