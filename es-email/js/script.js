/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
stampa un messaggio appropriato sull’esito del controllo.
(NON utilizzate il metodo .includes())
*/

// generazione "database" email
const emails = ["mario.rossi@gmail.com",
    "laura.bianchi@yahoo.com",
    "andrea.verdi@hotmail.com",
    "maria.rossini@gmail.com",
    "paolo.celesti@yahoo.com",
    "anna.giallo@hotmail.com",
    "luigi.verde@example.com",
    "eleonora.azzurri@gmail.com",
    "giuseppe.rosa@yahoo.com",
    "fabio.viola@hotmail.it"];


// salvo gli elementi del DOM
const emailAddressElement = document.querySelector("#email-address");
const searchButtonElement = document.querySelector("#search-button");


// variabile di controllo
let check = 0;

// controllo quando effettuo un click
searchButtonElement.addEventListener("click",
    function () {
        const userEmail = emailAddressElement.value;
        console.log(userEmail);

        for (let i = 0; i < emails.length; i++) {
            if (emails[i] == userEmail) {
                check = 1;
            }
        }

        if (check == 0) {
            console.log("L'email non è presente nel database");
        }

        else {
            console.log("L'email non è presente nel database");
        }

    }
)




