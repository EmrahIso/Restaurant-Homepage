import { initialPageLoad } from "./initialPageLoad";
import "../scss/main.scss";


window.addEventListener("load", initialPageLoad);

//sayHi();


/*
const headerNavigationEl = document.querySelector(".navigation--header");
const headerNavigationRect = headerNavigationEl.getBoundingClientRect();

const { height } = headerNavigationRect;
const headerNavigationOffsetTop = headerNavigationEl.offsetTop;

let scrolling = false;

window.addEventListener("scroll", () => scrolling = true);

setInterval(() => {
    if(scrolling) {
        scrolling = false;
        if((height + headerNavigationOffsetTop) < window.scrollY) {
            headerNavigationEl.classList.add("navigation--fixed");
        } else {
            headerNavigationEl.classList.remove("navigation--fixed");
        } 
    }
}, 100);*/