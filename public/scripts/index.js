// localStorage.removeItem('cart');
const produkty = [
  [
    0,
    "Akcesoria do czyszczenia akwarium",
    "Zestaw narzędzi do pielęgnacji wody",
    "Zestaw akcesoriów do czyszczenia akwarium, ułatwia utrzymanie czystości i zdrowia ryb",
    14.99,
    "produkt1.png",
    7,
    10,
    12,
  ],
  [
    1,
    "Miska ceramiczna dla kota",
    "Miska ozdobiona motywem kotka",
    "Miska ceramiczna dla kota ozdobiona motywem kotka, estetyczna i praktyczna",
    9.5,
    "produkt2.png",
    20,
    5,
    6,
  ],
  [
    2,
    "Karma dla psa",
    "Pełnowartościowa karma sucha",
    "Pełnowartościowa karma sucha dla psa, zapewniająca odpowiednią dawkę składników odżywczych",
    15.99,
    "produkt3.png",
    30,
    5,
    7,
  ],
  [
    3,
    "Zabawka interaktywna dla kota",
    "Wiszak z piłką do łapania",
    "Zabawka interaktywna dla kota w formie wiszaka z piłką do łapania, zapewniająca aktywność i rozrywkę",
    7.99,
    "produkt4.png",
    15,
    2,
    6,
  ],
  [
    4,
    "Obroża odblaskowa dla psa",
    "Regulowana obroża z elementami odblaskowymi",
    "Obroża odblaskowa dla psa, zapewnia bezpieczeństwo podczas spacerów po zmroku",
    5.5,
    "produkt5.png",
    40,
    1,
    7,
  ],
  [
    5,
    "Klatka dla chomika",
    "Plastikowa klatka z kołowrotkiem",
    "Plastikowa klatka z kołowrotem dla chomika, zapewniająca miejsce do zabawy i odpoczynku",
    25.99,
    "produkt6.png",
    10,
    5,
    8,
  ],
  [
    6,
    "Polewaczka dla ptaków",
    "Polewaczka z pojemnikiem na ziarna",
    "Polewaczka dla ptaków z pojemnikiem na ziarna, zapewniająca świeżą wodę i pożywienie",
    3.5,
    "produkt7.png",
    50,
    3,
    9,
  ],
  [
    7,
    "Akwarium stojące",
    "Eleganckie akwarium z podświetleniem",
    "Eleganckie akwarium stojące z podświetleniem, idealne dla ryb i innych organizmów wodnych",
    69.99,
    "produkt8.png",
    5,
    11,
    12,
  ],
  [
    8,
    "Karma dla królika",
    "Zbilansowana karma peletowana",
    "Zbilansowana karma peletowana dla królika, bogata w składniki odżywcze",
    8.99,
    "produkt9.png",
    20,
    5,
    8,
  ],
  [
    9,
    "Pilnik do pazurków dla kota",
    "Pilnik z miękkim uchwytem",
    "Pilnik do pazurków dla kota z miękkim uchwytem, zapobiega nadmiernemu ścieraniu pazurków",
    4.5,
    "produkt10.png",
    30,
    4,
    6,
  ],
  [
    10,
    "Wkładka do klatek chomika",
    "Wkładka higieniczna z chłonnym wkładem",
    "Wkładka do klatek chomika z chłonnym wkładem, zapewnia czystość i higienę",
    6.5,
    "produkt11.png",
    15,
    5,
    8,
  ],
  [
    11,
    "Karma mokra dla kota",
    "Karma w puszce z kawałkami mięsa",
    "Karma mokra dla kota w puszce z kawałkami mięsa, bogata w witaminy i minerały",
    1.99,
    "produkt12.png",
    25,
    5,
    6,
  ],
  [
    12,
    "Piłka treningowa dla psa",
    "Gumowa piłka do ćwiczeń",
    "Piłka treningowa dla psa wykonana z gumy, idealna do nauki apportu i aktywności",
    3.5,
    "produkt13.png",
    20,
    2,
    7,
  ],
  [
    13,
    "Klatka dla chomika",
    "Metalowa klatka z hamakiem",
    "Metalowa klatka dla chomika z hamakiem, stworzona dla komfortowego życia i zabawy",
    32.5,
    "produkt14.png",
    12,
    5,
    8,
  ],
  [
    14,
    "Zestaw przysmaków dla psa",
    "Miks smakołyków dla psa",
    "Zestaw przysmaków dla psa w różnych smakach, idealny jako nagroda lub przekąska",
    9.99,
    "produkt15.png",
    18,
    4,
    7,
  ],
  [
    15,
    "Stojak na klatki ptaków",
    "Składany stojak z regulacją wysokości",
    "Stojak na klatki ptaków składany z regulacją wysokości, ułatwia obsługę i czyszczenie",
    17.5,
    "stojak_klatki_ptaki.jpg",
    8,
    3,
    9,
  ],
  [
    16,
    "Karmnik na balkon dla ptaków",
    "Zawieszany karmnik z daszkiem",
    "Karmnik na balkon dla ptaków zawieszany z daszkiem, przyciąga ptaki do domu i ogródka",
    6.99,
    "karmnik_balkon_ptaki.jpg",
    30,
    3,
    9,
  ],
  [
    17,
    "Zestaw roślin do terrarium",
    "Wybór roślin ozdobnych",
    "Zestaw roślin do terrarium z wyborem ozdobnych gatunków, tworzy przyjemną atmosferę dla zwierzątek",
    11.99,
    "rosliny_terarium.jpg",
    10,
    10,
    11,
  ],
  [
    18,
    "Pianka do stylizacji futra kota",
    "Pianka z kolagenem i olejami",
    "Pianka do stylizacji futra kota z dodatkiem kolagenu i olejków, pielęgnuje i nawilża sierść",
    6.5,
    "pianka_kot.jpg",
    15,
    5,
    6,
  ],
  [
    19,
    "Hamak do klatki chomika",
    "Wygodny hamak z miękkim wypełnieniem",
    "Hamak do klatki chomika z miękkim wypełnieniem, zapewnia przyjemne miejsce do spania i relaksu",
    4.99,
    "hamak_chomik.jpg",
    22,
    2,
    8,
  ],
];


function generujElementHTML() {
  let html = "";
  let x = -1;

  for (let k = 0; k < 3; k++) {
    html += `<div class="row">`;
    for (let i = 0; i < 4; i++) {
      x++;
      html += `
                        <div class="col-lg-3 text-center">
                            <button class="product-button" id="btn3" onclick="displayItem('${produkty[x][0]}')"> 
                                <div class="card border-0 bg-light mb-2">
                                    <div class="card-body">
                                        <img src="./img/${produkty[x][5]}" class="img-fluid" alt="">
                                    </div>
                                </div>
                                <h6>${produkty[x][1]}</h6>
                                <p>${produkty[x][4]}zł</p>
                            </button>
                        </div>
                `;
    }
    html += `</div>`;
  }

  return html;
}

function generujElementHTML2() {
  let html = "";
  html += `<div class="row">`;
  for (let i = 0; i < 4; i++) {
    html += `
                <div class="col-lg-3 text-center">
                    <button class="product-button" id="btn3" onclick="displayItem('${produkty[i][0]}')"> 
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
  html += `</div>`;
  return html;
}

function displayCartContent() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  html = "";

  for (let item of cart) {
    let id = item[0];
    html += `
            <div class="produkcik pt-3">
                <div class="row produktwkoszyku" id="produktwkoszyku">
                    <div class="col-lg-2 pt-2">
                        <img src="./img/${produkty[id][5]}" alt="" style="width: 100%;">
                    </div>
                    <div class="col-lg-5 p-2">
                        <h6>${produkty[id][1]}</h6>
                        <p>${produkty[id][2]}</p>
                    </div>
                    <div class="counter col-lg-3 d-flex justify-content-center align-items-center">
                        <button id="minus" onClick="itemCounterCart(false, id)">-</button>
                        <button id="numberCart">${item[1]}</button>
                        <button id="plus" onClick="itemCounterCart(true, id)">+</button>
                    </div>
                    <div class="col-lg-2">
                        <div class="row d-flex justify-content-end">
                            <h2>${produkty[id][4]}zł</h2>
                        </div>
                        <div class="row d-flex justify-content-end align-items-center">
                            <button class="btn4"><img src="./img/kosz.png" style="height: 50px;"></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }
  return html;
}

function itemCounterCart(count, id) {
  let nmbc = cart[id];
  nmbc += count ? 1 : -1;
  cart[id] = nmbc;
  console.log(nmbc)
}

function displayItem(id) {
  console.log(`Wybrany produkt o id: ${id}`);
  localStorage.setItem("selectedProductId", id);
  window.location.href = "item.html";
}

function getItem() {
  var selectedProductId = localStorage.getItem("selectedProductId");
  var idProduktu = parseInt(selectedProductId);

  let html = "";

  html += `
    <div class="row pt-4 pl-5">
                    <h1>O produkcie</h1>
                </div>
    <div class="row mt-5 p-3" style="background-color: rgb(250, 250, 250); border-radius: 10px;">
            <div class="col-lg-6 col-md-12 m-auto text-center py-3">
                <img src="./img/${produkty[idProduktu][5]}" style="width:100%;" alt="Brak zdjęcia">
            </div>
            <div class="col-lg-5 col-sm-12">
                <h6 id="tags">#Jedzenie, #psy</h6>
                <h1 id="name">${produkty[idProduktu][1]}</h1>
                <h6><b>SZYBKA WYSYŁKA</b> już od 29,90zł!</h6>
                <h1 id="price">${produkty[idProduktu][4]}zł</h1>
                <hr>
                <div class="row ml-2">
                    <div id="itemscounter" class=" col-lg-4 col-sm-12 d-flex justify-content-between">
                        <button id="minus" onClick="itemCounter(false)">-</button>
                        <button id="number">1</button>
                        <button id="plus" onClick="itemCounter(true)">+</button>
                    </div>
                    <div class="col-lg-8 col-sm-12 text-center">
                        <button id="addToCart" onClick="addToCart(${idProduktu})">Dodaj do koszyka</button>
                    </div>
                </div>
                <div class="row py-4">
                            <img src="./img/pyaing.jpg"  class="img-fluid px-3">
                        </div>
                        <div class="row px-4">
                            <div class="py-1">
                                <img src="./img/p1.png" style="height: 20px; padding-right: 10px;">
                                <span>Darmowa i szybka dostawa od 95,00 zł</span>
                            </div>
                            <div class="py-1">
                                <img src="./img/p2.png" style="height: 20px; padding-right: 10px;">
                                <span>Do 3% zwrotu w programie lojalnościowym</span>
                            </div>
                            <div class="py-1">
                                <img src="./img/p3.png" style="height: 20px; padding-right: 10px;">
                                <span>Prezent do wybranych produktów</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col-lg-10 px-5">
                        <h1>Opis</h1>
                        <hr>
                        <p id="description">
                        ${produkty[idProduktu][3]}
                        </p>
                    </div>
                </div>
    `;
  return html;
}

let nmb = 1;
function itemCounter(count) {
  nmb += count ? 1 : -1;

  document.getElementById("number").innerHTML = nmb;
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  console.log(id, nmb);
  let itemIndex = cart.findIndex((item) => item[0] === id);

  if (itemIndex !== -1) {
    cart[itemIndex][1] += nmb;
  } else {
    cart.push([id, 1]);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
}
