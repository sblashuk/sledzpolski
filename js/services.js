const services = [
    {
        name: "Zajęcia indywidualne",
        icon: "bi-person-fill",
        description: "Zajęcia indywidualne to propozycja skrojona specjalnie dla Ciebie, zapewniająca pełną uwagę i dostosowanie do Twoich potrzeb i celów."
    },
    {
        name: "Zajęcia grupowe",
        icon: "bi-people-fill",
        description: "Zajęcia grupowe są przeznaczone dla osób, które lepiej uczą się poprzez pracę w grupie. Grupy liczą maksymalnie 6 osób. Zajęcia nastawione są na prace w parach, kreatywne prace projektowe, konwersacje, naukę języka poprzez gry i zabawy."
    },
    {
        name: "Oferta dla firm i instytucji",
        icon: "bi-briefcase-fill",
        description: "Oprócz kursów językowych oferuję również warsztaty kulturowe dla cudzoziemców oraz szkolenia metodyczne dla początkujących nauczycieli języka polskiego jako obcego lub drugiego."
    },
    {
        name: "Warsztaty kulturowe i kawiarenki językowe",
        icon: "bi-briefcase-fill",
        description: "wydarzenia mające na celu wprowadzenie uczestników w świat polskiej i podlaskiej kultury, a w konsekwencji umożliwienie im integracji z lokalną społecznością. Podczas kawiarenek językowych cudzoziemcy mogą doskonalić umiejetność swobodnego wypowiadania się na różne tematy."
    }
]

function createServices() {
    const wrapper = document.getElementById("services-wrapper");
    const template = document.getElementById("service-template");

    services.forEach(service => {
        const clone = template.content.cloneNode(true);
        clone.querySelector("h4").textContent = service.name;
        clone.querySelector("p").textContent = service.description;

        const iconContainer = clone.querySelector(".icon");
        const starIcon = document.createElement("i");
        starIcon.className = "bi " + service.icon;
        iconContainer.appendChild(starIcon);

        wrapper.appendChild(clone);
    });
}

createServices()