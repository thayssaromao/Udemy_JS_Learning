const numero = Number(prompt("Digite um numero"));
const titulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

titulo.innerHTML = numero;
texto.innerHTML += `<p>seu numero ao quadrado é ${Math.pow(numero,2)}</p>`;
texto.innerHTML += `<p>seu numero é inteiro:  ${Number.isInteger(numero)}</p>`;

//ceil
//floor
//toFixed