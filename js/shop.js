const items = [
    {
        "name": "Polski dla początkujących",
        "description": "Podstawowy kurs języka polskiego dla początkujących.",
        "price": 49
    },
    {
        "name": "Gramatyka polska w praktyce",
        "description": "Zwięzły przewodnik po gramatyce z ćwiczeniami.",
        "price": 39
    },
    {
        "name": "Słownictwo tematyczne - poziom A2",
        "description": "Zestaw słownictwa z obrazkami i przykładami użycia.",
        "price": 29
    },
    {
        "name": "Rozmówki polsko-angielskie",
        "description": "Najczęściej używane zwroty przydatne w codziennej komunikacji.",
        "price": 19
    },
    {
        "name": "Ebook: 100 najczęstszych czasowników",
        "description": "Lista czasowników z odmianą i przykładami zdań.",
        "price": 25
    }
]

function createShop() {
    const wrapper = document.getElementById("shop-wrapper");
    const template = document.getElementById("shop-template");

    items.forEach(item => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".shop-item-title").textContent = item.name;
        clone.querySelector(".shop-item-description").textContent = item.description;
        clone.querySelector(".shop-item-price").textContent = item.price;

        wrapper.appendChild(clone);
    });
}

createShop()