/*
Fabio Arrivabene tem 27 anos pesa73 kg
tem 1.7 de altura e seu IMC é de 25.25951557093426
Fabio nasceu em 1995
*/

const nome = "Fabio";
const sobrenome = "Arrivabene";
const idade = 27;
const peso = 73;
const alturaEmM = 1.7;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

//template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu imc é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
