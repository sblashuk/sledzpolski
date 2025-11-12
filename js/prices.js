const prices = [
    {
        id: 0,
        price: 140,
        icon: "bi-people-fill",
    },
    {
        id: 1,
        price: 85,
        icon: "bi-briefcase-fill",
    },
    {
        id: 2,
        price: 60,
        icon: "bi-briefcase-fill",
    }
]

function createPrices() {
    const wrapper = document.getElementById("prices-wrapper");
    const template = document.getElementById("prices-template");

    prices.forEach((price, index) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector("h2").setAttribute("data-i18n", `prices.${index}.title`);
        clone.querySelector("h4").textContent = price.price;

        const listItems = clone.querySelectorAll("li.list-group-item");
        listItems[0].setAttribute("data-i18n", `prices.${index}.tag1`);
        listItems[1].setAttribute("data-i18n", `prices.${index}.tag2`);

        wrapper.appendChild(clone);
    });
}

createPrices()