const readlineSync = require('readline-sync');

function validaNome(nome) {
    return nome.replace(/[0-9]/g, '');  
}

// Função para validar o CPF
function validaCPF(cpf) {
  cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++)
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++)
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}

// Função para ler o CPF do usuário e validar
function lerEValidarCPF() {
  let cpf = readlineSync.question('Digite seu CPF: ');
  if (validaCPF(cpf)) {
    console.log('CPF válido.');
  } else {
    console.log('CPF inválido.');
  }
}

function lerevalidarNome() {
let nome = readlineSync.question('Digite seu nome    ');
if (validaNome(nome)) {
  console.log('Nome Valido');
  console.log(nome);
  return true;
} else {
  console.log('Nome invalido');
  console.log(nome);
}

}

lerEValidarCPF();
lerevalidarNome();