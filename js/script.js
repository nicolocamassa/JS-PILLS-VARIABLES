/* ESERCIZIO 1 */
let number = 100;
console.log(number);

/* ESERCIZIO 2 */
const PI = 3.14;
console.log(PI);

/* ESERCIZIO 2 */
/* 
ERRORE
PI = 3.1416;
console.log(PI); */

let radius = 8;
let circle = radius * 2 * PI;
console.log(circle);

/* ESERCIZIO 3 */
let name = "Carlo";
name = "Marco";
console.log(name);

/* ESERCIZIO 4 */
let greet = "Ciao Mondo!";
console.log(greet);

/* ESERCIZIO 4/B */
/* let greet = "Come stai?";
console.log(greet); */

/* ESERCIZIO 4/C */
greet += " Come stai?"
console.log(greet)

/* ESERCIZIO 5 */
let n1 = 10;
let n2 = 15;
let comparison;

if(n1>n2){
    comparison = n1+" è maggiore di "+n2;
}else{
    comparison = n1+" è minore di "+n2;
}
console.log(comparison);

/* ESERCIZIO 6 */
let string1 = "Ciao mondo";
let string2 = "Come stai";
let comparison2;

if(string1 == string2){
    comparison2 = "stringhe diverse"
}else{
    comparison2 = "stringhe uguali"
}

console.log(comparison2);

/* ESERCIZIO 7 */
let num = 1;
let comparison3;

if(num == '1'){
    comparison3 = "i numeri sono uguali";
}else{
    comparison3 = "i numeri sono diversi";
}

console.log(comparison3);

/* ESERCIZIO 8 */
for(let i = 1; i <= 42; i++){
    console.log(i);
}

/* ESERCIZIO 9 */
for(let i = 42; i >= 1; i--){
    console.log(i);
}

/* ESERCIZIO 10 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/* ESERCIZIO 10/B */
const fruits = ["mela", "banana", "pesca", "pera", "albicocca", "mango", "kiwi", "papaya"];
