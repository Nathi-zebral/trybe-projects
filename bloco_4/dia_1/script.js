 exercicio 1 
let a = 14;
let b = 7;
let adiciona = 'soma de a+b =' +' '+(a+b);
let subtrai = 'subtração de a-b ='+' '+(a-b);
let multiplica = 'multiplicação de a*b ='+' '+(a*b);
let divide = 'divisão de a/b ='+' '+(a/b);
let resto = 'resto de 14/7 ='+ ' '+ (14%7);
console.log(adiciona);
console.log(subtrai);
console.log(multiplica);
console.log(divide);
console.log(resto);

exercicio 2 

let c = 2;
let d = 4;
if (c > d){
    console.log(c);
}else {
    console.log(d);
}

exercicio 3

if (a > b && a > d){
    console.log('a é maior que b e d');
} else if (b > a && b > d) {
    console.log(b);
} else {
    console.log(d);
}


exercicio 4
let e = 0;
switch (e){
    case (e < 0):
        console.log('negative');
    break;
    case (e > 0):
        console.log('positive');
    break;
    default :
    console.log('zero');
}

exercicio 5

let f = 60;
let g = 90;
let h = 45;

if(f + g + h == 180){
    console.log('true');
}else {
    console.log('false');
}


// exercicio 6

let pecaDoXadrez = "Rainha";

switch (pecaDoXadrez.toLowerCase()){
    case "peao":
        console.log("anda uma casa");
        break;
    case "cavalo":
        console.log("anda duas casas para frente e uma para o lado");
        break;
    case "bispo":
        console.log("anda nas diagonais");
        break;
    case "torre":
        console.log("anda horizontal e verticalmente");
        break;
    case "rainha":
        console.log("anda para todos os lados");
        break;
    default:
    console.log('essa peça não existe');
}

// exercicio 7

let nota = 60;
if(nota >= 90 && nota <= 100) {
 console.log("nota A");
}else if(nota >= 80 && nota <= 90 ) {
  console.log("nota B");
}else if(nota >= 70 && nota <= 80) {
  console.log("nota C");
}else if(nota >= 60 && nota <= 70) {
  console.log("nota D");
}else if(nota >= 50 && nota <= 60) {
  console.log("nota E");
}else if(nota < 50 && nota > 1) {
  console.log("nota F");
}else{
  console.log("Erro")
}

// exercicio 8 
let num_1 = 35;
let num_2 = 48;
let num_3 = 25;

if((num_1 %2) == 0 || (num_2 %2) == 0 || (num_3 %2) == 0) {
  console.log("true")
}else{
  console.log("false")
}

// exercicio 9 

let num_1 = 30;
let num_2 = 48;
let num_3 = 25;
if((num_1 %2)  == 1 || (num_2 %2) == 1 || (num_3 %2) == 1) {
  console.log("true")
}else{
  console.log("false")
}

// exercicio 10

let valorCusto = 20;
let valorVenda = 50;

if(valorCusto >= 0 && valorVenda >= 0) {
    let valorTotalCusto = valorCusto * 1.2;
    let lucro = (valorVenda - valorTotalCusto) * 1000;
    console.log('o lucro foi de '+ lucro);
} else {
    console.log('valores não podem ser iguais a zero');
}

// quanto de lucro  apos vender 1000 desse produto.

// exercicio 11 

let salarioBruto = 5000.00;
let valorInss;
let valorIr;
let salarioLiquido;
if(salarioBruto <= 1556.94) {
  valorInss = salarioBruto * 0.08;
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  valorInss = salarioBruto * 0.09;
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  valorInss = salarioBruto * 0.11;
}else if(salarioBruto >= 5189.82) {
  valorInss = 570.88;
}else {
  valorInss = 0;
}
let salDeduzidoInss = salarioBruto - valorInss;
if(salDeduzidoInss >= 1903.99 && salDeduzidoInss <= 2826.65){
  valorIr = (salDeduzidoInss * 0.075) - 142,80;
}else if(salDeduzidoInss >= 2826.66 && salDeduzidoInss <= 3751){
  valorIr = (salDeduzidoInss * 0.15) - 354.80;
}else if(salDeduzidoInss >= 3751.06 && salDeduzidoInss <= 4664.68){
  valorIr = (salDeduzidoInss * 0.225) - 636.13;
}else if(salDeduzidoInss >= 4664.68){
  valorIr = (salDeduzidoInss * 0.275) - 869.36;
}else {
  valorIr = 0;
}
salarioLiquido = salDeduzidoInss - valorIr;
 console.log(salarioLiquido);
 