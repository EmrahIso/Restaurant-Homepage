import { initializeHomeTab } from "./home";

export function initialPageLoad() {
    const bodyEl = document.querySelector("body");

    // Initializing header

    const headerInitialization = () => {
        const headerEl = document.createElement("header");
        headerEl.classList.add("header");
        bodyEl.appendChild(headerEl);

        const containerEl = document.createElement("div");
        containerEl.classList.add("container");
        headerEl.appendChild(containerEl);

        const navigationEl = document.createElement("nav");
        navigationEl.classList.add("navigation", "navigation--header");
        containerEl.appendChild(navigationEl);

        const mainHeading = document.createElement("h1");
        mainHeading.classList.add("main-heading", "main-heading--logo");
        mainHeading.textContent = "bistro piquant";
        navigationEl.appendChild(mainHeading);

        const navigationListEl = document.createElement("ul");
        navigationListEl.classList.add("navigation__list");
        navigationEl.appendChild(navigationListEl);

        const navigationButtonsContent = ["Home", "About", "Menu", "Contact"];

        navigationButtonsContent.forEach(item => {
            const navigationListItemEl = document.createElement("li");
            navigationListEl.appendChild(navigationListItemEl);

            const navigationButtonEl = document.createElement("button");
            navigationButtonEl.classList.add("button", "button--navigation");
            navigationButtonEl.setAttribute("type", "button");
            navigationButtonEl.textContent = item;
            navigationListItemEl.appendChild(navigationButtonEl);
        });

        const navigationButtonEl = document.createElement("button");
        navigationButtonEl.classList.add("button", "button--open-navigation");
        navigationEl.appendChild(navigationButtonEl);
        
        const mobileNavigationDialogEl = document.createElement("dialog");
        mobileNavigationDialogEl.classList.add("dialog", "navigation--dialog");
        mobileNavigationDialogEl.dataset.modal = "";
        containerEl.appendChild(mobileNavigationDialogEl);

        const mobileNavigationDialogBackgroundEl = document.createElement("div");
        containerEl.appendChild(mobileNavigationDialogBackgroundEl);

        const mobileNavigationButtonEl = document.createElement("button");
        mobileNavigationButtonEl.classList.add("button", "button--open-navigation", "button--open-navigation-mobile");
        mobileNavigationButtonEl.setAttribute("autofocus", "");
        mobileNavigationDialogEl.appendChild(mobileNavigationButtonEl);

        const mobileNavigationEl = document.createElement("nav");
        mobileNavigationEl.classList.add("navigation", "navigation--mobile");
        mobileNavigationDialogEl.appendChild(mobileNavigationEl);

        const mobileNavigationListEl = document.createElement("ul");
        mobileNavigationListEl.classList.add("navigation__list", "navigation__list--mobile");
        mobileNavigationEl.appendChild(mobileNavigationListEl);

        const mobileNavigationButtonsContent = ["Home", "About", "Menu", "Contact"];

        mobileNavigationButtonsContent.forEach(item => {
            const mobileNavigationListItemEl = document.createElement("li");
            mobileNavigationListEl.appendChild(mobileNavigationListItemEl);

            const mobileNavigationButtonEl = document.createElement("button");
            mobileNavigationButtonEl.classList.add("button", "button--navigation");
            mobileNavigationButtonEl.setAttribute("type", "button");
            mobileNavigationButtonEl.textContent = item;
            mobileNavigationListItemEl.appendChild(mobileNavigationButtonEl);
        });

        const headerContentBoxEl = document.createElement("div");
        headerContentBoxEl.classList.add("header__content-box");
        containerEl.appendChild(headerContentBoxEl);

        const wrapperDivEl = document.createElement("div");
        headerContentBoxEl.appendChild(wrapperDivEl);

        const secondaryHeadingEl = document.createElement("h2");
        secondaryHeadingEl.innerHTML = "Culinary Delights Await at <br> Bistro Piquant";
        secondaryHeadingEl.classList.add("secondary-heading");
        wrapperDivEl.appendChild(secondaryHeadingEl);

        const headerButtonEl = document.createElement("button");
        headerButtonEl.textContent = "See Menu";
        headerButtonEl.classList.add("button", "button--cta", "button-menu");
        wrapperDivEl.appendChild(headerButtonEl);

        const headerInfoEl = document.createElement("div");
        headerInfoEl.classList.add("header__info");
        headerContentBoxEl.appendChild(headerInfoEl);
        headerInfoEl.appendChild(document.createElement("div"));
    }

    headerInitialization();

    // Add #content div to bodyEl

    const contentEl = document.createElement("div");
    contentEl.id = "content";
    bodyEl.appendChild(contentEl);

    // Initializing Home Tab
    
    initializeHomeTab();

    // Initializing footer

    const footerInitialization = () => {
        const footerEl = document.createElement("footer");
        footerEl.classList.add("footer");
        bodyEl.appendChild(footerEl);

        const containerEl = document.createElement("div");
        containerEl.classList.add("container");
        footerEl.appendChild(containerEl);

        const footerLayoutUpEl = document.createElement("div");
        footerLayoutUpEl.classList.add("footer__layout-up");
        containerEl.appendChild(footerLayoutUpEl);

        const navigationEl = document.createElement("nav");
        navigationEl.classList.add("navigation", "navigation--footer");
        footerLayoutUpEl.appendChild(navigationEl);

        const navigationListEl = document.createElement("ul");
        navigationListEl.classList.add("navigation__list", "navigation__list--footer");
        navigationEl.appendChild(navigationListEl);

        const navigationButtonsContent = ["Home", "About", "Menu", "Contact"];

        navigationButtonsContent.forEach(item => {
            const navigationListItemEl = document.createElement("li");
            navigationListEl.appendChild(navigationListItemEl);

            const navigationButtonEl = document.createElement("button");
            navigationButtonEl.classList.add("button", "button--navigation");
            navigationButtonEl.setAttribute("type", "button");
            navigationButtonEl.textContent = item;
            navigationListItemEl.appendChild(navigationButtonEl);
        });

        const socialEl = document.createElement("div");
        socialEl.classList.add("social");
        footerLayoutUpEl.appendChild(socialEl);

        const socialListEl = document.createElement("ul");
        socialListEl.classList.add("social__list");
        socialEl.appendChild(socialListEl);

        const socialIconNames = ["youtube", "twitter", "facebook", "instagram"];

        socialIconNames.forEach(name => {
            const socialListItemEl = document.createElement("li");
            socialListEl.appendChild(socialListItemEl);

            const socialListItemLinkEl = document.createElement("a");
            socialListItemLinkEl.href = "#";
            socialListItemLinkEl.setAttribute("rel", "noopener noreferrer");
            socialListItemLinkEl.classList.add("social__link");
            socialListItemEl.appendChild(socialListItemLinkEl);

            const iconEl = document.createElement("ion-icon");
            iconEl.setAttribute("name", `logo-${name}`);
            iconEl.classList.add("social__link-icon");
            socialListItemLinkEl.appendChild(iconEl);
        });

        const footerLayoutDown = document.createElement("div");
        footerLayoutDown.classList.add("footer__layout-down");
        containerEl.appendChild(footerLayoutDown);

        const copyrightParaEl = document.createElement("p");
        copyrightParaEl.classList.add("copyright");
        copyrightParaEl.textContent = "© 2024. All rights reserved.";
        footerLayoutDown.appendChild(copyrightParaEl);

        const mainHeadingEl = document.createElement("h3");
        mainHeadingEl.classList.add("main-heading");
        mainHeadingEl.textContent = "bistro piquant";
        footerLayoutDown.appendChild(mainHeadingEl);

        const footerInfoListEl = document.createElement("ul");
        footerInfoListEl.classList.add("footer__info-list");
        footerLayoutDown.appendChild(footerInfoListEl);

        const footerInfoItemContent = ["Terms of Use", "Privacy Policy"];

        footerInfoItemContent.forEach(content => {
            const footerInfoListItemEl = document.createElement("li");
            footerInfoListEl.appendChild(footerInfoListItemEl);

            const footerInfoListItemLinkEl = document.createElement("a");
            footerInfoListItemLinkEl.href = "#";
            footerInfoListItemLinkEl.setAttribute("rel", "noopener noreferrer");
            footerInfoListItemLinkEl.classList.add("footer__info-link");

            footerInfoListItemLinkEl.textContent = content;

            footerInfoListItemEl.appendChild(footerInfoListItemLinkEl);
        });
    }

    footerInitialization();
    
    ///
    console.log(bodyEl);
    console.log("page loaded");
}