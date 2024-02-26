function Bolo(bolo, sabor) {
    this.bolo = bolo;
    this.sabor = sabor;
}

function TipoBolo(bolo) {
    Bolo.call(this, bolo);
}

function SaborBolo(sabor) {
    Bolo.call(this, sabor);
}

const bolo1 = new Bolo("Red Velvet", "Morango");
const bolo2 = new Bolo("Bolo Invertido", "Abacaxi");
const bolo3 = new Bolo("Bolo Mousse", "Maracujá");

console.log(bolo1);
console.log(bolo2);
console.log(bolo3);
