// VARIAVEL LET 
let altura = 5
let comprimento = 5

let area1 = altura + comprimento;
console.log(area1)
//OU
area = altura + comprimento;
console.log(area)

//USANDO IF / ELSE
let altu = 5
let comp = 10
let forma = 'retangulo'
let tamanho;

if(forma === 'retangulo'){
    tamanho = altu * comp;
} else {
    tamanho = (altu * comp) / 2;
}
console.log(tamanho);

//VARIAVEL CONST- operacao que nao conseguimos alterar o programa 
const al = 2
const com = 10
const form = 'retangulo'
let taman; 
//const taman; -> // daria erro, pois nao foi atribuido um valor a constante
if(form === 'retangulo') {
    taman = al * com;
} else{
    taman = (al * com) / 2;
}
console.log(taman)
