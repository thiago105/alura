// TIPO STRING - retorna textos, palavras, numeros
const aspasDuplas = "Ola,Thiago!"
const aspasSimples = 'Ola, Thiago !'
const ambasAspas = "  Thiago disse - 'Ola!'" 
const retornaNumeros = "123 123"
const retornatextoNum = "minha senha é: 123"

console.log(aspasDuplas);// Ola,Thiago!

// CONTATENACAO - usando operador (+)
const citacao = "meu nome é: "
const nome = 'Thiago'
console.log(citacao + nome);//meu nome é: Thiago

// TEMPLETE STRING - usado para dar valor com uma string
const  senha = "123456"
 console.log(`A senha do Thiago é: ${senha}`)//A senha do Thiago é: 123456

// CODIFICACAO DE STRING
 const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)// $
console.log(aMaiusculo)// A
console.log(tique)// ✅
console.log(hiragana)// ぁ

// PADRONIZACAO DE  STRINGS
const cidade = "belo horizonte";
const input = "Belo Horizonte";
console.log(cidade === input); //false

const inputMinusculo = input.toLowerCase();//converte minusculo
console.log(cidade === inputMinusculo); // true

const tamanho = ["minhaSenha", "123"]
console.log(tamanho.length) // 2 ->quantidade de letras/palavras
