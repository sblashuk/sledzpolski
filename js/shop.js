const items = [
    {
        "id": 0,
        "title": "Humanizacja zwierząt",
        "subtitle": "e-book",
        "description": "Materiały do dyskusji na lekcjach języka polskiego jaki obcego (poziom B1/B2) - PDF do wydruku na lekcje stacjonarne i interaktywne ćwiczenia na zajęcia online",
        "image": "ebook_Humanizacja_zwierząt.avif",
        "link": "https://buy.stripe.com/6oUeVc0Kkeish0dd4w9MY00",
        "price": 25
    }
]

function createShop() {
    const wrapper = document.getElementById("shop-wrapper");
    const template = document.getElementById("shop-template");

    items.forEach((item, index) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".shop-item-title").setAttribute("data-i18n", `shop.${index}.title`);
        clone.querySelector(".card-subtitle").textContent = item.subtitle;
        clone.querySelector(".shop-item-description").setAttribute("data-i18n", `shop.${index}.description`);
        clone.querySelector(".shop-item-price").textContent = item.price;
        clone.querySelector(".card-img-top").src = "assets/shop/" + item.image;
        clone.querySelector(".buy-button").href = item.link;

        wrapper.appendChild(clone);
    });
}

createShop()