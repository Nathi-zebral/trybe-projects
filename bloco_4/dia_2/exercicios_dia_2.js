//1 percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index +=1){
    console.log(numbers[index]);
}
//2 você deve somar todos os valores contidos no array e imprimir o resultado;
let somaNumbers = 0; 

for (let index = 0; index < numbers.length; index +=1) {
    somaNumbers = numbers [index] + somaNumbers;
}
console.log(somaNumbers);

//3 calcule e imprima a média aritmética dos valores contidos no array

let mediaNumbers = 0;

for (let index = 0; index < numbers.length; index +=1) {
    mediaNumbers = numbers[index] + mediaNumbers; 
}
console.log(mediaNumbers/numbers.length);

//4  código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
//   Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let valor = mediaNumbers/numbers.length ;
if  ( valor > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}
