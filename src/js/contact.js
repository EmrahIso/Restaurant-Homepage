export function initializeContactTab() {
    const contentEl = document.querySelector("#content");
    contentEl.querySelectorAll("*").forEach(n => n.remove());
    window.scrollTo(0, 0);

    const sectionEl = document.createElement("section");
    sectionEl.classList.add("section-contact");
    contentEl.appendChild(sectionEl);

    const initializeContactArticle = () => {
        const articleEl = document.createElement("article");
        articleEl.classList.add("article-contact");
        sectionEl.appendChild(articleEl);

        const containerEl = document.createElement("div");
        containerEl.classList.add("container");
        articleEl.appendChild(containerEl);

        const tertiaryHeadingEl = document.createElement("h3");
        tertiaryHeadingEl.classList.add("tertiary-heading");
        tertiaryHeadingEl.textContent = "Contact";
        containerEl.appendChild(tertiaryHeadingEl);

        const quaternaryHeadingEl = document.createElement("h4");
        quaternaryHeadingEl.classList.add("quaternary-heading");
        quaternaryHeadingEl.textContent = '"How to contact us?"';
        containerEl.appendChild(quaternaryHeadingEl);

        const descriptionItalicPara = document.createElement("p");
        descriptionItalicPara.classList.add("ita-para");
        descriptionItalicPara.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus <br> pariatur voluptatibus. Quidem consequatur harum volupta!";
        containerEl.appendChild(descriptionItalicPara);

        const addressEl = document.createElement("address");
        addressEl.classList.add("address");
        containerEl.appendChild(addressEl);

        const addressTertiaryHeadingEl = document.createElement("h3");
        addressTertiaryHeadingEl.classList.add("tertiary-heading", "address__heading");
        addressTertiaryHeadingEl.textContent = "Bistro piquant";
        addressEl.appendChild(addressTertiaryHeadingEl);

        const addressInfoBoxIconNames = [
            "location",
            "call",
        ];

        const addressInfoBoxParaContent = [
            "1234 Nowhere, Doesn't Exist City, 56789",
            `Phone: <a href="tel:+1234567890" class="address__link">(123) 456-7890</a>`,
        ];

        for(let i = 0; i < 2; i++) {
            const addressInfoBoxEl = document.createElement("div");
            addressInfoBoxEl.classList.add("address__info-box");
            addressEl.appendChild(addressInfoBoxEl);

            const addressInfoBoxIconEl = document.createElement("ion-icon");
            addressInfoBoxIconEl.name = addressInfoBoxIconNames[i];
            addressInfoBoxIconEl.classList.add("address__icon");
            addressInfoBoxEl.appendChild(addressInfoBoxIconEl);

            const addressParaEl = document.createElement("p");
            addressParaEl.innerHTML = addressInfoBoxParaContent[i];
            addressInfoBoxEl.appendChild(addressParaEl);
        }

        const formEl = document.createElement("form");
        formEl.action = "#";
        formEl.classList.add("form");
        containerEl.appendChild(formEl);

        const formInputTypes = [
            "name",
            "email",
        ];

        const formInputPlaceholders = [
            "e.g. Emrah Isovic",
            "e.g. emrahisovic20@gmail.com"
        ];

        for(let i = 0; i < 2; i++) {
            const divWrapper = document.createElement("div");
            formEl.appendChild(divWrapper);

            const labelEl = document.createElement("label");
            labelEl.classList.add("form__label");
            labelEl.setAttribute("for", formInputTypes[i]);
            labelEl.textContent = formInputTypes[i].charAt(0).toUpperCase() + formInputTypes[i].slice(1);
            divWrapper.appendChild(labelEl);

            const inputEl = document.createElement("input");
            inputEl.classList.add("form__input");
            inputEl.type = formInputTypes[i] == "name" ? "text" : "email";
            inputEl.id = formInputTypes[i];
            inputEl.name = formInputTypes[i];
            inputEl.required = true;
            inputEl.setAttribute("placeholder", formInputPlaceholders[i]);
            divWrapper.appendChild(inputEl);

            const spanEl = document.createElement("span");
            spanEl.textContent = `Invalid ${formInputTypes[i].charAt(0).toUpperCase() + formInputTypes[i].slice(1)} Value`;
            divWrapper.appendChild(spanEl);
        }

        const textareaDivWrapper = document.createElement("div");
        formEl.appendChild(textareaDivWrapper);

        const labelEl = document.createElement("label");
        labelEl.classList.add("form__label");
        labelEl.setAttribute("for", "message");
        labelEl.textContent = "Your Message";
        textareaDivWrapper.appendChild(labelEl);

        const textareaEl = document.createElement("textarea");
        textareaEl.id = "message";
        textareaEl.name = "message";
        textareaEl.classList.add("form__textarea");
        textareaEl.minLength = "5";
        textareaEl.maxLength = "512";
        textareaEl.rows = 10;
        textareaEl.required = true;
        textareaEl.setAttribute("placeholder", "Your Message ...");
        textareaDivWrapper.appendChild(textareaEl);

        const spanEl = document.createElement("span");
        spanEl.textContent = "Invalid Message Value";
        textareaDivWrapper.appendChild(spanEl);
        
        const formSubmitButton = document.createElement("button");
        formSubmitButton.type = "submit";
        formSubmitButton.classList.add("button", "button--cta");
        formSubmitButton.textContent = "Send us a message";
        formEl.appendChild(formSubmitButton);
    }

    initializeContactArticle();

    const dialogNavigationEl = document.querySelector(".header .dialog");
    document.body.style.overflowY = "auto";
    dialogNavigationEl.close();
}