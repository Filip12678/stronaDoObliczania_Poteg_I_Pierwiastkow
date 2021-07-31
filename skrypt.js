function myFunction() {

podstawa = prompt("Wprowadź podstawę pierwiastka");
stopien = prompt("Wprowadź stopień pierwiastka");

const pierwiastkowanie = function(podstawa, stopien) {
	var wynik;
    wynik = Math.pow(podstawa, 1/stopien);
    return wynik;
}

var wynikPierwiastkowania = pierwiastkowanie(podstawa, stopien);
console.log(`Pierwiastek o podstawie ${podstawa} i wykładniku ${stopien} wynosi ${wynikPierwiastkowania}`);
alert(`Pierwiastek o podstawie ${podstawa} i wykładniku ${stopien} wynosi ${wynikPierwiastkowania}`);
}

function myFunction1() {

podstawa = prompt("Wprowadź podstawę potęgi");
wykladnik = prompt("Wprowadź wykładnik potęgi");

const potegowanie = function(podstawa, wykladnik) {
    var wynik;
    wynik = Math.pow(podstawa, wykladnik);
    return wynik;
}
var wynikPotegowania = potegowanie(podstawa, wykladnik);
console.log(`Potęga o podstawie ${podstawa} i wykładniku ${wykladnik} wynosi ${wynikPotegowania}`);
alert(`Potęga o podstawie ${podstawa} i wykładniku ${wykladnik} wynosi ${wynikPotegowania}`);
}