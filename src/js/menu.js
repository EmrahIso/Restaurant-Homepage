export function initializeMenuTab() {
    const contentEl = document.querySelector("#content");

    const sectionEl = document.createElement("section");
    sectionEl.classList.add("section-menu");
    contentEl.appendChild(sectionEl);

    const initializeMenuArticle = () => {
        const articleEl = document.createElement("article");
        articleEl.classList.add("article-menu");
        sectionEl.appendChild(articleEl);

        const containerEl = document.createElement("div");
        containerEl.classList.add("container");
        articleEl.appendChild(containerEl);

        const tertiaryHeadingEl = document.createElement("h3");
        tertiaryHeadingEl.classList.add("tertiary-heading");
        tertiaryHeadingEl.textContent = "Our Menu";
        containerEl.appendChild(tertiaryHeadingEl);

        const quaternaryHeadingEl = document.createElement("h4");
        quaternaryHeadingEl.classList.add("quaternary-heading");
        quaternaryHeadingEl.textContent = `"Enjoyable place since 1998"`;
        containerEl.appendChild(quaternaryHeadingEl);

        const descriptionItalicPara = document.createElement("p");
        descriptionItalicPara.classList.add("ita-para");
        descriptionItalicPara.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus <br> pariatur voluptatibus. Quidem consequatur harum volupta!";
        containerEl.appendChild(descriptionItalicPara);

        const menuEl = document.createElement("div");
        menuEl.classList.add("menu");
        containerEl.append(menuEl);

        const mealList = ["one", "two", "three","four", "five", "six"];

        for(let i = 1; i < 7; i++) {
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
            buttonMenuEl.classList.add("button", "button--menu");
            buttonMenuEl.textContent = "Order";
            menuCardInfoEl.appendChild(buttonMenuEl);
        }
    }

    initializeMenuArticle();

    console.log("menu");
}