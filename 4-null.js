// TIPO NULL - existe um valor mas nao foi passado
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}// não há informação

//  TIPO UNDEFINED - nao existe um valor e nao/foi passado 
let input1 = null;
let input2;

console.log(input1); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false