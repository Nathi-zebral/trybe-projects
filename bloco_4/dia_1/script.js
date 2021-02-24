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

let c = 2;
let d = 4;
if (c > d){
    console.log(c);
}else {
    console.log(d);
}

if (a > b && a > d){
    console.log('a é maior que b e d');
} else if (b > a && b > d) {
    console.log(b);
} else {
    console.log(d);
}

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

let f = 60;
let g = 90;
let h = 45;

if(f + g + h == 180){
    console.log('true');
}else {
    console.log('false');
}

