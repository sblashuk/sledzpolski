const reviews = [
    {
        author: "Vita Stsiepina",
        stars: 5,
        text: "Chodzę na Kawiarenkę jedzykową i Rozmówki polsko-polskie. Prowadzi je Patrycja. Jestem zachwycona tymi spotkaniami. Wyglądają jako eleganckie połączenie szybkich randek, planszówek i praktycznych sesji nauki języka XD Za każdym razem wychodzę stamtąd z nowymi słowami, wiedzą i w cudownym nastroju. Jedyne czego żałuję, to tego, że na stolikach zawsze leżę dużo materiału i brakuje mnie czasu to wszystko przestudiować. Wspaniały format pozwalający przełamać bariery językowe. Polecam"
    },
    {
        author: "Veronika Bigoń",
        stars: 5,
        text: "Z całego serca chciałabym polecić Pani Patrycję jako nauczycielkę języka polskiego. Zajęcie zawsze przechodzi intensywnie, aktywnie, nigdy nie zauważysz jak minuje czas. Nawet kiedy jesteś zmęczony, uśmiech i energia Pani Patrycji bardzo szybko Cię ożywi i będziesz pracować na zajęci z całych sił. Zawsze przypominam sobie analogię, które opowiadała Pani Patrycja, kiedy tłumaczyła zasady gramatyki. Dzięki Pani Patrycji za pracę!!!! Polecam ❤️❤️❤️"
    },
    {
        author: "Ksenia Bloshuk",
        stars: 5,
        text: "Я хочу всем порекомендовать Патрицию. С ней я начала изучение польского языка и это было мое лучшее решение. Она умеет свежо и интересно подать материал. На ее уроках не заскучаете.🙃"
    },
    {
        author: "Valeria Zenchenko",
        stars: 5,
        text: "Pani Patrycja daje mi to, czego zawsze brakowało mi w szkole, na uczelni i u innych prywatnych korepetytorów - ciekawe zajęcia, pełne różnych aktywności, które są zgodne z moimi zainteresowaniami. Nie mogę sobie nawet wyobrazić, ile czasu Pani Patrycja poświęca na przygotowanie się do każdych zajęć, ale zawsze jest warto. Niesamowicie cieszę się z każdych zajęć, polecam 🙂"
    },
    {
        author: "Natallia Shestak",
        stars: 5,
        text: "Pani Patrycja jest najlepszą nauczycielką od Polskiego!!! Jej zajęcia zawsze są interesujące, kreatywne, edukacyjne, informacyjne, nie nudny. Może znaleźć podejście do dzieci, do dorosłych, każdy będzie wdzięczny, zadowolony i chętnie będzie współpracować."
    },
    {
        author: "Viktar Stankevich",
        stars: 5,
        text: "Dlaczego uczę się polskiego z Patrycją? Na jej profilu na Instagramie od razu widać, że ona lubi to co robi. Zajęcia są zawsze interesujące i zawsze nie zauważasz jak leci czas. Zawsze ciekawe i aktualne tematy, do których Patrycja przygotowana indywidualnie na podstawie moich próśb. Chcesz tematu poszukiwania pracy? nie ma problemu, ciekawy temat korespondencji biznesowej? proszę. Komputery? drukarki? pliki w chmurze? i na ten temat była lekcja. A może chcesz uczyć się polskiego z polskich piosenek? I taka bardzo interesująca lekcja była 🙂 Ale oczywiście są też wady. Mieszkam daleko i nie ma możliwości uczestniczenia w spotkaniach offline I szkoda, że nie mam możliwości na lekcje więcej niż 3 razy w miesiącu, ale chciałbym."
    },
    {
        author: "Yuliya Radnionak",
        stars: 5,
        text: "Lekcje i nauczyciel są wspaniałe. Wszystko jest SUPER jasne i skonfigurowane tak, że w ciągu godziny całkowicie przechodzisz temat, uczysz się nowych słów i wykonujesz ciekawe zadania.Przed każdą lekcją możesz napisać coś, czego chciałbyś się nauczyć, a Pani Patrycja dobierze dla ciebie indywidualne zadania. Dzięki jej lekcjom poruszyłam te tematy, których nie mogłam zrozumieć na innych kursach języka polskiego. Polecam serdecznie ❤️"
    },
    {
        author: "Kryścina Drobyš",
        stars: 5,
        text: "Bardzo dziękuję za zajęcia! Bardzo cieszę się, że spotkałam Panią Patrycję! Jeszcze uczę się, ale dzięki Pani wszystko idzie łatwiej i z maksymalnym efektem. Teraz mogę chodzić na spotkanie rodziców w szkole, wszystko rozumieć i nawet odpowiadać! Ten tekst też pisałam sama 😁"
    },
    {
        author: "Kirill Bubnou",
        stars: 5,
        text: "Pani Patrycja miała duży wpływ na rozwój moich umiejętności językowych. Po kursie dałem radę zdać egzamin na poziom B2. Teraz mogę spokojnie komunikować i korzystać z języka w całości (nie korzystając z tłumacza 😅). Szczegółowe i twórcze podejście Pani do zajęć kosztuje oddzielnego podziękowania. Polecam ❤️❤️❤️"
    },
    {
        author: "Esmira Haji",
        stars: 5,
        text: "Patrycja is a talanted and enthusiastic teacher who is deeply invested in meeting her students needs. I enjoyed my Polish language classes with her! ☀️"
    },
    {
        author: "Kateryna Vynohradova",
        stars: 5,
        text: "Bardzo polecam kursy języka polskiego z Panią Patrycją! Zajęcia są bardzo kreatywne, ciekawe, na zajęciach panuje przyjemna atmosfera, materiał tematów prezentowany jest bardzo dobrze! Dziękuję bardzo! 🙂"
    },
    {
        author: "Mary Benetska",
        stars: 5,
        text: "Serdecznie polecam kursy języka polskiego z Panią Patrycją! Jestem Ukrainką i planowałam iść na studia w Polsce, więc przed tym miałam intensywne kursy języka. Mogę powiedzieć, że nowoczesne metody uczenia ułatwiły moją drogę do udoskonalenia tej umiejętności oraz zrobiły jej bardziej interesującą! Każde zajęcie było wypełnione nowymi ciekawymi tematami, zabawnymi grami, które pomogły praktykować język i towarzyską atmosferę. Nawet nie zauważyłam, że miesiàć spłynął tak szybko, bo chętnie uczęszczałam na kursy. Także się wybraliśmy na wycieczkę w muzeum, pod czas tego wydarzenia mieliśmy możliwość również poznać współczesną sztukę. Po skończeniu kursów czułam się bardziej pełną siebie na piśmie i mówieniu w języku polskim. Więc, jestem bardzo wdzięczna za wykonaną pracę Pani Patrycji i za cierpliwość z którą ona traktuje każdego ucznia!"
    },
    {
        author: "ĦâĴi Miŕàâñ",
        stars: 5,
        text: "Teacher Patrycja, a wonderful teacher . I'm glad that I know her ! Keep it up Dear teacher I proud that you were our teacher ! Best teacher I ever had !"
    }
]

function createReviews() {
    const wrapper = document.getElementById("reviews-wrapper");
    const template = document.getElementById("review-template");

    reviews.forEach(review => {
        const clone = template.content.cloneNode(true);

        clone.querySelector("blockquote").textContent = review.text;
        clone.querySelector("figcaption").textContent = review.author;

        const starContainer = clone.querySelector(".star-container");
        for (let i = 0; i < review.stars; i++) {
            const starIcon = document.createElement("i");
            starIcon.className = "bi bi-star-fill";
            starContainer.appendChild(starIcon);
        }

        wrapper.appendChild(clone);
    });
}

createReviews()