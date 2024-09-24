export function initializeAboutTab() {
    const contentEl = document.querySelector("#content");
    contentEl.querySelectorAll("*").forEach(n => n.remove());
    window.scrollTo(0, 0);

    const sectionEl = document.createElement("section");
    sectionEl.classList.add("section-about");
    contentEl.appendChild(sectionEl); 

    const initializeAboutArticle = () => {
        const articleEl = document.createElement("article");
        articleEl.classList.add("article-about");
        sectionEl.appendChild(articleEl);

        const containerEl = document.createElement("div");
        containerEl.classList.add("container");
        articleEl.appendChild(containerEl);

        const tertiaryHeadingEl = document.createElement("h3");
        tertiaryHeadingEl.classList.add("tertiary-heading");
        tertiaryHeadingEl.textContent = "About Us";
        containerEl.appendChild(tertiaryHeadingEl);

        const quaternaryHeadingEl = document.createElement("h4");
        quaternaryHeadingEl.classList.add("quaternary-heading");
        quaternaryHeadingEl.textContent = '"Culinary Delights Await at Bistro Piquant"';
        containerEl.appendChild(quaternaryHeadingEl);

        const articleAboutWrapperEl = document.createElement("div");
        articleAboutWrapperEl.classList.add("article-about-wrapper");
        containerEl.appendChild(articleAboutWrapperEl);

        const articleTextContentWrapperEl = document.createElement("div");
        articleAboutWrapperEl.appendChild(articleTextContentWrapperEl);

        const paraContent = [
            "Sed ut perspiciatis unde omnis iste <strong>natus</strong> error sit voluptatem <strong>accusantium</strong> doloremque laudantium, totam rem aperiam, <strong>eaque</strong> ipsa quae ab illo inventore veritatis et <strong>quasi</strong> architecto beatae vitae dicta sunt explicabo.",

            "Nemo enim ipsam voluptatem quia voluptas sit <strong>aspernatur</strong> aut odit aut fugit, sed quia consequuntur <strong>magni</strong> dolores eos qui ratione voluptatem sequi nesciunt.",

            "Neque porro quisquam est, qui <strong>dolorem</strong> ipsum quia dolor sit amet, consectetur, <strong>adipisci</strong> velit, sed quia non numquam eius modi tempora incidunt ut labore et <strong>dolore</strong> magnam aliquam quaerat voluptatem.",
        ]

        for (let i = 0; i < 3; i++) {
            const paraEl = document.createElement("p");
            paraEl.innerHTML = paraContent[i];
            paraEl.classList.add("para");
            articleTextContentWrapperEl.appendChild(paraEl);
        }

        const articleTeamImgContEl = document.createElement("div");
        articleTeamImgContEl.classList.add("article-about-team-img-cont");
        articleAboutWrapperEl.appendChild(articleTeamImgContEl);
    }

    initializeAboutArticle();

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