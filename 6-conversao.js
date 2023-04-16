// TIPOS DE DADOS
//IMPLICITA 
const numero = 123;
const stringNumero = "123";

console.log(numero == stringNumero);//compara valor dado
console.log(numero === stringNumero);//compara se realmente sao iguais
console.log(numero + stringNumero);//junta os dois valores 


//EXPLICITA

//Number()
//String()
const num = 123;
const stringNum = /*Number*/("123"); //podemos passar o tipo na variavel tambem
 console.log(num + Number(stringNum));// faz uma soma entre os dois valores

 
