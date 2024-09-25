import "../scss/main.scss";
import { initialPageLoad } from "./initialPageLoad";
import { initializeHomeTab } from "./home";
import { initializeAboutTab } from "./about";
import { initializeMenuTab } from "./menu";
import { initializeContactTab } from "./contact";

// Initial page load function invocation
initialPageLoad();


// switching tabs by clicking buttons in navigation

const  tabSwitchNavigationListEl = document.querySelector(".navigation--header .navigation__list");
const  footerTabSwitchNavigationListEl = document.querySelector(".navigation--footer .navigation__list");

function tabSwitchButtonClickEventHandler (e) {
    const eventTargetEl = e.target;
    const eventTargetTextContent = eventTargetEl.textContent.toLowerCase();

    switch(eventTargetTextContent) {
        case "home":
            initializeHomeTab();
        break;
        case "about":
            initializeAboutTab();
        break;
        case "menu":
            initializeMenuTab();
        break;
        case "contact":
            initializeContactTab();
        break; 
    }
}

tabSwitchNavigationListEl.addEventListener("click", tabSwitchButtonClickEventHandler);
footerTabSwitchNavigationListEl.addEventListener("click", tabSwitchButtonClickEventHandler);

// switching tabs by clicking buttons outside of navigation

const headerContentEl = document.querySelector(".header__content-box");
const menuEl = document.querySelector(".menu");
const reservationEl = document.querySelector(".article-reservation");

function specificTabSwitchClickEventHandler(e) {
    const eventTargetEl = e.target;
    const eventTargetClassListArray = eventTargetEl.classList;
    const eventTargetClassList = eventTargetClassListArray[eventTargetClassListArray.length - 1];
    switch(eventTargetClassList) {
        case "button-menu":
            initializeMenuTab();
        break;
        case "button-contact":
            initializeContactTab();
        break; 
    }
}

headerContentEl.addEventListener("click", specificTabSwitchClickEventHandler);
menuEl.addEventListener("click", specificTabSwitchClickEventHandler);
reservationEl.addEventListener("click", specificTabSwitchClickEventHandler);

// mobile navigation

const dialogNavigationEl = document.querySelector(".header .dialog");
const openMobileNavigationButtonEl = document.querySelector(".button--open-navigation");
const closeMobileNavigationButtonEl = document.querySelector(".button--open-navigation-mobile");

function mobileTabSwitchClickEventHandler (e) {
    const eventTargetEl = e.target;
    const eventTargetTextContent = eventTargetEl.textContent.toLowerCase();

    switch(eventTargetTextContent) {
        case "home":
            initializeHomeTab();
            closeMobileNavigation();
        break;
        case "about":
            initializeAboutTab();
            closeMobileNavigation();
        break;
        case "menu":
            initializeMenuTab();
            closeMobileNavigation();
        break;
        case "contact":
            initializeContactTab();
            closeMobileNavigation();
        break; 
    }
}

function openMobileNavigation() {
    openMobileNavigationButtonEl.classList.add("opened");
    closeMobileNavigationButtonEl.classList.remove("closed");
    dialogNavigationEl.showModal();
    document.body.style.overflowY = "hidden";
}

function closeMobileNavigation() {
    openMobileNavigationButtonEl.classList.remove("opened");
    closeMobileNavigationButtonEl.classList.add("closed");
    dialogNavigationEl.close();
    document.body.style.overflowY = "auto";
}

function openMobileNavigationClickEventHandler(e) {
    openMobileNavigation();

    const  mobileTabSwitchNavigationListEl = document.querySelector(".navigation--mobile .navigation__list--mobile");
    mobileTabSwitchNavigationListEl.addEventListener("click", mobileTabSwitchClickEventHandler);
}

openMobileNavigationButtonEl.addEventListener("click", openMobileNavigationClickEventHandler);

function closeMobileNavigationClickEventHandler(e) {
    closeMobileNavigation();

    const  mobileTabSwitchNavigationListEl = document.querySelector(".navigation--mobile .navigation__list--mobile");
    mobileTabSwitchNavigationListEl.removeEventListener("click", mobileTabSwitchClickEventHandler);
}

closeMobileNavigationButtonEl.addEventListener("click", closeMobileNavigationClickEventHandler);