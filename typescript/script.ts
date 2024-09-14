//Komment
document.write("asd");

//Valtozok
var valtozo1:string = "almafa";
var valtozo2:number = 2;
var valtozo3:boolean = true;
var valtozo4:any = 3;
var valtozo5:unknown = "kortefa";

var szam:number = valtozo4;
//var szoveg:string = valtozo5;

//Tombok
var szamTomb:number[] = [1, 2, 3, 4, 5];
var szovegTomb:string[] = ["alma", "korte", "banan"];
var logikaiTomb:boolean[] = [true, true, false];
var vegyesTomb:any[] = [23, "asd", false];

//Functionok
function Kiir():void{
    console.log("Szeretem a TypeScript-et!");
}

function KiirSzoveggel(szoveg:string):void{
    console.log(szoveg);
}

function SzamNegyzet(szam:number):number{
    return szam * szam;
}

Kiir();
KiirSzoveggel("almafa");
KiirSzoveggel(SzamNegyzet(5).toString());