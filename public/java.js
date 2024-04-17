const produkty = [
    [0, 'Akcesoria do czyszczenia akwarium', 'Zestaw narzędzi do pielęgnacji wody', 'Zestaw akcesoriów do czyszczenia akwarium, ułatwia utrzymanie czystości i zdrowia ryb', 14.99, 'produkt1.png', 7, 10, 12],
    [1, 'Miska ceramiczna dla kota', 'Miska ozdobiona motywem kotka', 'Miska ceramiczna dla kota ozdobiona motywem kotka, estetyczna i praktyczna', 9.50, 'produkt2.png', 20, 5, 6],
    [2, 'Karma dla psa', 'Pełnowartościowa karma sucha', 'Pełnowartościowa karma sucha dla psa, zapewniająca odpowiednią dawkę składników odżywczych', 15.99, 'produkt3.png', 30, 5, 7],
    [3, 'Zabawka interaktywna dla kota', 'Wiszak z piłką do łapania', 'Zabawka interaktywna dla kota w formie wiszaka z piłką do łapania, zapewniająca aktywność i rozrywkę', 7.99, 'produkt4.png', 15, 2, 6],
    [4, 'Obroża odblaskowa dla psa', 'Regulowana obroża z elementami odblaskowymi', 'Obroża odblaskowa dla psa, zapewnia bezpieczeństwo podczas spacerów po zmroku', 5.50, 'produkt5.png', 40, 1, 7],
    [5, 'Klatka dla chomika', 'Plastikowa klatka z kołowrotkiem', 'Plastikowa klatka z kołowrotem dla chomika, zapewniająca miejsce do zabawy i odpoczynku', 25.99, 'produkt6.png', 10, 5, 8],
    [6, 'Polewaczka dla ptaków', 'Polewaczka z pojemnikiem na ziarna', 'Polewaczka dla ptaków z pojemnikiem na ziarna, zapewniająca świeżą wodę i pożywienie', 3.50, 'produkt7.png', 50, 3, 9],
    [7, 'Akwarium stojące', 'Eleganckie akwarium z podświetleniem', 'Eleganckie akwarium stojące z podświetleniem, idealne dla ryb i innych organizmów wodnych', 69.99, 'produkt8.png', 5, 11, 12],
    [8, 'Karma dla królika', 'Zbilansowana karma peletowana', 'Zbilansowana karma peletowana dla królika, bogata w składniki odżywcze', 8.99, 'produkt9.png', 20, 5, 8],
    [9, 'Pilnik do pazurków dla kota', 'Pilnik z miękkim uchwytem', 'Pilnik do pazurków dla kota z miękkim uchwytem, zapobiega nadmiernemu ścieraniu pazurków', 4.50, 'produkt10.png', 30, 4, 6],
    [10, 'Wkładka do klatek chomika', 'Wkładka higieniczna z chłonnym wkładem', 'Wkładka do klatek chomika z chłonnym wkładem, zapewnia czystość i higienę', 6.50, 'produkt11.png', 15, 5, 8],
    [11, 'Karma mokra dla kota', 'Karma w puszce z kawałkami mięsa', 'Karma mokra dla kota w puszce z kawałkami mięsa, bogata w witaminy i minerały', 1.99, 'produkt12.png', 25, 5, 6],
    // [12, 'Piłka treningowa dla psa', 'Gumowa piłka do ćwiczeń', 'Piłka treningowa dla psa wykonana z gumy, idealna do nauki apportu i aktywności', 3.50, 'pilka_pies_trening.jpg', 20, 2, 7],
    // [13, 'Klatka dla chomika', 'Metalowa klatka z hamakiem', 'Metalowa klatka dla chomika z hamakiem, stworzona dla komfortowego życia i zabawy', 32.50, 'klatka_chomik_metalowa.jpg', 12, 5, 8],
    // [14, 'Zestaw przysmaków dla psa', 'Miks smakołyków dla psa', 'Zestaw przysmaków dla psa w różnych smakach, idealny jako nagroda lub przekąska', 9.99, 'przysmaki_pies.jpg', 18, 4, 7],
    // [15, 'Stojak na klatki ptaków', 'Składany stojak z regulacją wysokości', 'Stojak na klatki ptaków składany z regulacją wysokości, ułatwia obsługę i czyszczenie', 17.50, 'stojak_klatki_ptaki.jpg', 8, 3, 9],
    // [16, 'Karmnik na balkon dla ptaków', 'Zawieszany karmnik z daszkiem', 'Karmnik na balkon dla ptaków zawieszany z daszkiem, przyciąga ptaki do domu i ogródka', 6.99, 'karmnik_balkon_ptaki.jpg', 30, 3, 9],
    // [17, 'Zestaw roślin do terrarium', 'Wybór roślin ozdobnych', 'Zestaw roślin do terrarium z wyborem ozdobnych gatunków, tworzy przyjemną atmosferę dla zwierzątek', 11.99, 'rosliny_terarium.jpg', 10, 10, 11],
    // [18, 'Pianka do stylizacji futra kota', 'Pianka z kolagenem i olejami', 'Pianka do stylizacji futra kota z dodatkiem kolagenu i olejków, pielęgnuje i nawilża sierść', 6.50, 'pianka_kot.jpg', 15, 5, 6],
    // [19, 'Hamak do klatki chomika', 'Wygodny hamak z miękkim wypełnieniem', 'Hamak do klatki chomika z miękkim wypełnieniem, zapewnia przyjemne miejsce do spania i relaksu', 4.99, 'hamak_chomik.jpg', 22, 2, 8]
];

console.log(produkty);

function generujElementHTML() {
    let html = '';
    let x = 0
    produkty.forEach(produkt => {
        if (x%4 == 0) {
            html +=  `<div class="row">`
        }
        html += `
                <div class="col-lg-3 text-center">
                    <button class="product-button" onclick="displayItem('${produkt[0]}')"> 
                        <div class="card border-0 bg-light mb-2">
                            <div class="card-body">
                                <img src="./img/${produkt[5]}" class="img-fluid" alt="">
                            </div>
                        </div>
                        <h6>${produkt[1]}</h6>
                        <p>${produkt[4]}zł</p>
                    </button>
                </div>
        `;
        if (x%4 == 3){
            html += `</div>`
        }
        x++;
    });
    return html;
}

function generujElementHTML2() {
    let html = '';
    html += `<div class="row">`
    for (let i = 0; i < 4; i++) {
        html += `
                <div class="col-lg-3 text-center">
                    <button class="product-button" onclick="displayItem('${produkty[i][0]}')"> 
                        <div class="card border-0 bg-light mb-2">
                            <div class="card-body">
                                <img src="./img/${produkty[i][5]}" class="img-fluid" alt="">
                            </div>
                        </div>
                        <h6>${produkty[i][1]}</h6>
                        <p>${produkty[i][4]}zł</p>
                    </button>
                </div>
        `;
    }
    html += `</div>`
    return html;
}

function displayItem(id) {
    console.log(`Wybrany produkt o id: ${id}`);
    localStorage.setItem('selectedProductId', id);
    window.location.href = 'item.html';
    console.log("chuj")
}
