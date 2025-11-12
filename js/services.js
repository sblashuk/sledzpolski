const services = [
    {
        icon: "bi-person-fill",
    },
    {
        icon: "bi-people-fill",
    },
    {
        icon: "bi-briefcase-fill",
    },
    {
        icon: "bi-briefcase-fill",
    }
]

function createServices() {
    const wrapper = document.getElementById("services-wrapper");
    const template = document.getElementById("service-template");

    services.forEach((service, index) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector("h4").setAttribute("data-i18n", `services.${index}.title`);
        clone.querySelector("p").setAttribute("data-i18n", `services.${index}.description`);

        const iconContainer = clone.querySelector(".icon");
        const starIcon = document.createElement("i");
        starIcon.className = "bi " + service.icon;
        iconContainer.appendChild(starIcon);

        wrapper.appendChild(clone);
    });
}

createServices()