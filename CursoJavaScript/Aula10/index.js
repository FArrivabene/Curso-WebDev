// String, number, boolean, undefined, null, symbol

const nome = "Fabio"; // Aspas simples ''
const nome1 = "Fabio"; // Aspas duplas ""
const nome2 = `Fabio`; // Crase

const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined = não aponta pra local nenhum na memória
let sobrenomeAluno = null; // nulo -> não aponta pra local nenhum na memória

const aprovado = true;
false; // valor boolean = true ou false (Lógico)

const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);
