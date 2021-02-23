/* Gioco dei dadi
Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

var punteggioUtente = 0;
var punteggioComputer = 0;
var lancioDadi = document.getElementById('lancio');

lancioDadi.addEventListener('click',

function(){

    var dadoUno = Math.round(Math.random() * 5) + 1;
    var dadoDue = Math.round(Math.random() * 5) + 1;

    document.getElementById("dado-utente").innerHTML = dadoUno;
    document.getElementById("dado-computer").innerHTML = dadoDue;
    document.getElementById("img-dado-utente").src = dadoUno + ".png";
    document.getElementById("img-dado-computer").src = dadoDue + "pc.png";
    document.getElementById("punteggio-utente").innerHTML = punteggioUtente;
    document.getElementById("punteggio-computer").innerHTML = punteggioComputer;

    if (dadoUno > dadoDue){
        document.getElementById("esito").innerHTML = "Hai Vinto!";
        punteggioUtente = punteggioUtente + 1;
        document.getElementById("punteggio-utente").innerHTML = punteggioUtente;
    } else if (dadoUno < dadoDue){
        document.getElementById("esito").innerHTML = "Hai Perso!";
        punteggioComputer = punteggioComputer + 1;
        document.getElementById("punteggio-computer").innerHTML = punteggioComputer;
    } else {
        document.getElementById("esito").innerHTML = "Hai Pareggiato!";
    }

    if(punteggioComputer == 10 && punteggioComputer > punteggioUtente){
        alert("MI SPIACE: IL COMPUTER HA VINTO LA PARTITA!");
        window.location.reload();
    } else if(punteggioUtente == 10 && punteggioUtente > punteggioComputer){
        alert("COMPLIMENTI: HAI VINTO LA PARTITA!");
        window.location.reload();
    }
});