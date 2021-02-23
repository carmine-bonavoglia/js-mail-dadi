/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

var listaMail = [
    'kurkuit@rocketmail.com',
    'cogitoergosum@gmail.com',
    'trumphio@hotmail.com',
    'giuseppinismo@yahoo.com',
    'pallinopinco@pincopallino.com'
];

var mailInput = prompt('Inserisci una mail');

var bool = false;

for(var i = 0; i < listaMail.length; i++){
    if(mailInput == listaMail[i]){
        bool = true;
    }
}

if(bool == true){
    console.log('Accesso Effettuato!');
    alert('Accesso Effettuato!');
} else {
    console.log('Accesso Negato!');
    alert('Accesso Negato!');
}