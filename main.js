const resultElement = document.getElementById('main_title');

//# Chiedo all'utente il suo nome
const secondname = prompt('Qual è il tuo nome?');
console.log(secondname);


//# chiedo all'utente il suo cognome
const firstname =prompt('Qual è il tuo cognome?');
console.log(firstname);


//# poi chiedo il suo colore preferito
const preferedcolor =prompt('Qual è il tuo colore preferito?');
console.log(preferedcolor);

//# concatenazione tre dati + 24
const password = secondname + firstname + preferedcolor + '24';
resultElement.innerText= password;

