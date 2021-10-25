// 1.Atskiri elementai
//     a. Tamsiai žaliai nuspalvinti h1 tagą;

document.querySelector("h1").style.color="darkgreen";

//     b. Tagui i pridėti klasę small;

document.querySelector("i").classList.add("small");

//     c. Iš tago h1 pašalinti klasę main;

document.querySelector("h1").classList.remove("main");

//     d. Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;

document.querySelector("body>h2").classList.add("first");
document.querySelector("body>h2").classList.remove("main");

//     e .Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai

document.querySelector("h2> span").style.fontSize="10px";
document.querySelector("h2> span").style.color="grey";

// 2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
//     a. Suskaičiuoti kiek yra h2 tagų;

console.log("h2 tag sk: ", document.querySelectorAll("h2").length);

//     b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first

function firstH2() {
    return document.querySelectorAll('h2').length - document.querySelectorAll('h2.first').length;
}
console.log('h2 tagų, be first klases: ', firstH2());

//     c. Visus h2 tagus nuspalvinti šviesiai mėlynai

document.querySelectorAll("h2").forEach(element => element.style.color = "lightblue");

//     d. Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;

document.querySelectorAll("div.prices > h2").forEach(element => element.classList.add("price-tag"));

//     e. Pabraukti visus tagus su klase new;

document.querySelectorAll(".new").forEach(element => element.style.textDecoration = "underline");

//     f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);

let gyvunai = document.querySelectorAll('ul').length;
console.log('kiek yra gyvūnų kategorijų: ', gyvunai);

let zirafos = document.querySelectorAll('#zirafos li:not(.like-button)').length;

console.log('zirafu sk.: ', zirafos);

//     g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;

let ulDOM = document.querySelectorAll('ul');

ulDOM.forEach(function (element) {
    element.style.border = '5px solid blue'
});

ulDOM.forEach(function (element) {
    element.style.padding = '15px 50px 15px 50px'
});
console.log(ulDOM);

//     h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);

let naujiGyvunai = document.querySelectorAll('.new').length;

console.log('nauji gyvunai (klase new): ', naujiGyvunai);

//     i.Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;

let atskiraiGyvunai = document.querySelectorAll('.animals .new').length;

console.log('nauji gyvunai pagal kategorijas: ', atskiraiGyvunai);

let zirafuKiekis = document.querySelectorAll('#zirafos .new').length;
console.log('nauju zirafu: ', zirafuKiekis);

let plesrunuKiekis = document.querySelectorAll('#plesrunai .new').length;
console.log('nauju plesrunu: ', plesrunuKiekis);

let gyvaciuKiekis = document.querySelectorAll('#gyvates .new').length;
console.log('nauju gyvaciu: ', gyvaciuKiekis);

let zoliaedziuKiekis = document.querySelectorAll('#zoliaedziai .new').length;
console.log('nauju zoliaedziu: ', zoliaedziuKiekis);

// 3. Elementų events
//     a. Padaryti tai ką liepia mygtukai Header1 sekcijoje;

const buttonh1Color = document.getElementById("h1-color");
const h1 = document.querySelector("h1");
buttonh1Color.addEventListener("click", event => {
    h1.style.color="green"
});

const buttonh1Font = document.getElementById("h1-font")

buttonh1Font.addEventListener("click", event => {
    h1.style.fontSize="10px"
});
//     b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
//     c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
//     d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
//     e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
//     f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
//     g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;
// 4. Elementų grupių events
//     a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
//     b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
//     c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;
// 5. Dinaminis elementų kūrimas (su createElement)
//     a. Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
//     b. Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
//     c. Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like
//     d. Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta




