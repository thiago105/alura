// TIPO NUMBER - retorna numeros
const meuNumero = 3;
const numero1 = 1;
const numero2 = 2;

const somando = numero1 + numero2 ;
console.log(somando);// 3

// PONTOS FLUTUANTE
const pontosFlutuante =  3.3
const semZeroAntes = .3
const numero3 = 3

const dividindo = numero3 / pontosFlutuante;
console.log(dividindo)// 0.9090909090909092

const resultado = dividindo.toFixed(4) // .toFixed pega numeros dps do ponto
console.log(resultado)//0.9091

// NAN -> quando queremos( * ou - ou / ) algo e nao envolve numero ao todo
const teste = "teste";
const numero4 = 4

console.log(teste / numero4);// NaN

const soma = teste / numero4;
console.log(soma)//NaN

