export function initializeHomeTab() {
    const contentEl = document.querySelector("#content");
    contentEl.querySelectorAll("*").forEach(n => n.remove());
    window.scrollTo(0, 0);

    const sectionEl = document.createElement("section");
    sectionEl.classList.add("section-home");
    contentEl.appendChild(sectionEl);

    const initializeBestSellersArticle = () => {
        const articleEl = document.createElement("article");
        articleEl.classList.add("article-best-sellers");
        sectionEl.appendChild(articleEl);

        const containerEl = document.createElement("div");
        containerEl.classList.add("container");
        articleEl.appendChild(containerEl);

        const tertiaryHeadingEl = document.createElement("h3");
        tertiaryHeadingEl.classList.add("tertiary-heading");
        tertiaryHeadingEl.textContent = "Best Sellers";
        containerEl.appendChild(tertiaryHeadingEl);

        const quaternaryHeadingEl = document.createElement("h4");
        quaternaryHeadingEl.classList.add("quaternary-heading");
        quaternaryHeadingEl.textContent = '"Enjoyable place since 1998"';
        containerEl.appendChild(quaternaryHeadingEl);

        const descriptionItalicPara = document.createElement("p");
        descriptionItalicPara.classList.add("ita-para");
        descriptionItalicPara.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus <br> pariatur voluptatibus. Quidem consequatur harum volupta!";
        containerEl.appendChild(descriptionItalicPara);

        const menuEl = document.createElement("div");
        menuEl.classList.add("menu");
        containerEl.append(menuEl);

        const mealList = ["one", "two", "three"];

        for(let i = 1; i < 4; i++) {
            const menuCardEl = document.createElement("div");
            menuCardEl.classList.add("menu__card");
            menuEl.appendChild(menuCardEl);

            const menuCardBackgroundEl = document.createElement("div");
            menuCardBackgroundEl.classList.add("menu__card-background", `menu__card-background--${i}`);
            menuCardEl.appendChild(menuCardBackgroundEl);

            const menuCardInfoEl = document.createElement("div");
            menuCardInfoEl.classList.add("menu__card-info");
            menuCardEl.appendChild(menuCardInfoEl);

            const wrapperDivEl = document.createElement("div");
            menuCardInfoEl.appendChild(wrapperDivEl);

            const menuCardHeadingEl = document.createElement("span");
            menuCardHeadingEl.classList.add("menu__card-heading");
            menuCardHeadingEl.textContent = `Meal ${mealList[i - 1]}`;
            wrapperDivEl.appendChild(menuCardHeadingEl);

            const descriptionItalicParaCard = document.createElement("p");
            descriptionItalicParaCard.classList.add("ita-para", "ita-para--card");
            descriptionItalicParaCard.textContent = "by lorem ipsum";
            wrapperDivEl.appendChild(descriptionItalicParaCard);

            const buttonMenuEl = document.createElement("button");
            buttonMenuEl.type = "button";
            buttonMenuEl.classList.add("button", "button--menu", "button-menu");
            buttonMenuEl.textContent = "See menu";
            menuCardInfoEl.appendChild(buttonMenuEl);
        }
    }

    initializeBestSellersArticle();

    const initializeRegistrationArticle = () => {
        const articleEl = document.createElement("article");
        articleEl.classList.add("article-reservation");
        sectionEl.appendChild(articleEl);

        const containerEl = document.createElement("div");
        containerEl.classList.add("container");
        articleEl.appendChild(containerEl);

        const articleReservationWrapper = document.createElement("div");
        articleReservationWrapper.classList.add("article-reservation-wrapper");
        containerEl.appendChild(articleReservationWrapper);

        const tertiaryHeadingEl = document.createElement("h3");
        tertiaryHeadingEl.classList.add("tertiary-heading","tertiary-heading--reservation");
        tertiaryHeadingEl.textContent = "Reservation";
        articleReservationWrapper.appendChild(tertiaryHeadingEl);

        const quaternaryHeadingEl = document.createElement("h4");
        quaternaryHeadingEl.classList.add("quaternary-heading", "quaternary-heading--reservation");
        quaternaryHeadingEl.textContent = 'Ready to make an reservation ?';
        articleReservationWrapper.appendChild(quaternaryHeadingEl);

        const descriptionItalicPara = document.createElement("p");
        descriptionItalicPara.classList.add("ita-para", "ita-para--reservation");
        descriptionItalicPara.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus <br> pariatur voluptatibus. Quidem consequatur harum volupta!";
        articleReservationWrapper.appendChild(descriptionItalicPara);

        const buttonCtaEl = document.createElement("button");
        buttonCtaEl.type = "button";
        buttonCtaEl.textContent = "Contact Us";
        buttonCtaEl.classList.add("button", "button--cta", "button-contact");
        articleReservationWrapper.appendChild(buttonCtaEl);
    }

    initializeRegistrationArticle();

    const initializeGalleryArticle = () => {
        const articleEl = document.createElement("article");
        articleEl.classList.add("article-gallery");
        sectionEl.appendChild(articleEl);

        const containerEl = document.createElement("div");
        containerEl.classList.add("container");
        articleEl.appendChild(containerEl);

        const tertiaryHeadingEl = document.createElement("h3");
        tertiaryHeadingEl.classList.add("tertiary-heading");
        tertiaryHeadingEl.textContent = "Gallery";
        containerEl.appendChild(tertiaryHeadingEl);

        const quaternaryHeadingEl = document.createElement("h4");
        quaternaryHeadingEl.classList.add("quaternary-heading");
        quaternaryHeadingEl.textContent = `"You won't know how good it is until you taste it"`;
        containerEl.appendChild(quaternaryHeadingEl);

        const descriptionItalicPara = document.createElement("p");
        descriptionItalicPara.classList.add("ita-para");
        descriptionItalicPara.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus <br> pariatur voluptatibus. Quidem consequatur harum volupta!";
        containerEl.appendChild(descriptionItalicPara);

        const galleryEl = document.createElement("div");
        galleryEl.classList.add("gallery");
        containerEl.appendChild(galleryEl);

        for(let i = 1; i < 13; i++) {
            const galleryItemEl = document.createElement("div");
            galleryItemEl.classList.add("gallery__item", `gallery__item--${i}`);
            galleryEl.appendChild(galleryItemEl);
        }
    }

    initializeGalleryArticle();

    const dialogNavigationEl = document.querySelector(".header .dialog");
    document.body.style.overflowY = "auto";
    dialogNavigationEl.close();
}