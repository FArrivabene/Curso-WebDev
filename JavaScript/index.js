/**
 * Promisse
 *
 * A promessa de que algo irá acontecer
 * Porderá dar certo ou errado,
 * mas ir+a acontece
 *
 **/

let recusar = true;
let aceitar = false;

console.log("pedir uber");
const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve("pedido chegou");
  }

  return reject("pedido negado!");
});

promessa
  .then((result) => console.log(result))
  .catch((erro) => console.log(erro))
  .finally(() => console.log("finalizada"));

console.log("aguardando");
