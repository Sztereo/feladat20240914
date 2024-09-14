//Komment
document.write("asd");
//Valtozok
var valtozo1 = "almafa";
var valtozo2 = 2;
var valtozo3 = true;
var valtozo4 = 3;
var valtozo5 = "kortefa";
var szam = valtozo4;
//var szoveg:string = valtozo5;
//Tombok
var szamTomb = [1, 2, 3, 4, 5];
var szovegTomb = ["alma", "korte", "banan"];
var logikaiTomb = [true, true, false];
var vegyesTomb = [23, "asd", false];
//Functionok
function Kiir() {
    console.log("Szeretem a TypeScript-et!");
}
function KiirSzoveggel(szoveg) {
    console.log(szoveg);
}
function SzamNegyzet(szam) {
    return szam * szam;
}
Kiir();
KiirSzoveggel("almafa");
KiirSzoveggel(SzamNegyzet(5).toString());
