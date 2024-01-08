import { headerImg } from "./headerImg.js";
import { smooth } from "./smooth.js";
import { line } from "./line.js";
// import { site } from "./site.js";
import { polaroid } from "./polaroid.js";
import { hideHeaderImg } from "./hideHeaderImg.js";

window.addEventListener("load", function () {
    headerImg();
    smooth();
    line();
    // site();
    polaroid();
    hideHeaderImg();
})