/* add code after this comment */

const stocks = JSON.parse(stockData);
console.dir(stocks);

document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector('main');
    for (let stock of stocks) {
        let img = document.createElement('img');
        img.setAttribute('src', `images/logos/${stock.symbol}.svg`);
        img.setAttribute('title', stock.symbol);
        let div = document.createElement('div');
        div.setAttribute('class', 'item');

        div.appendChild(img);
        main.appendChild(div);
    }
});

document.querySelector('main').addEventListener('click', function (e) {
    if (e.target && e.target.nodeName.toLowerCase() == "img") {
        populateAside(e);
        }
    }
);

function populateAside(e) {
    let clickedSymbolName = e.target.getAttribute('title');

    const foundSymbol = stocks.find(function (element) {
        return element.symbol === clickedSymbolName;
    });

    let aside = document.querySelector('aside');
    aside.style.display = "block";

    let logo = document.querySelector('#logo img');
    let symbol = document.querySelector('#symbol');
    let name = document.querySelector('#name');
    let sector = document.querySelector('#sector');
    let sub = document.querySelector('#sub');

    logo.setAttribute('src', `images/logos/${foundSymbol.symbol}.svg`);
    symbol.textContent = foundSymbol.symbol;
    name.textContent = foundSymbol.name;
    sector.textContent = foundSymbol.sector;
    sub.textContent = foundSymbol.subIndustry;

}