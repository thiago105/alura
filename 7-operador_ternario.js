const idadeMinima = 18;
const idadeCliente =100;
// IF / ELSE
if(idadeCliente >= 18){
    console.log("liberado")
} else {
    console.log("não está liberado");
}

// OPERADOR TERNARIO
const resticao = (idadeCliente >= 18) ? "liberado " + "pode tomar cerveja " : "não está liberado parça " + "vai beber suco"
console.log(resticao)
//OU
console.log((idadeCliente >= 18) ? "liberado" + "pode tomar cerveja " : "não está liberado parça")

// OUTRO EXEMPLO
const semafaro = "azul"
const sinal = (semafaro == "verde" ? "pode passar" : semafaro == "vermelho" ? "pare" : semafaro == "amarelo" ? "atencao" : "nao existe")

console.log(sinal)
