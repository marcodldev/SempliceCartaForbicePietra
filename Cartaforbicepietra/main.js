let saluto = document.getElementById("saluto");

let bottone = document.getElementById("testo");

let textbox = document.getElementById("inputtext");

let gioco = document.getElementById("gioco");

let carta = document.getElementById("carta");
let forbice = document.getElementById("forbice");
let pietra = document.getElementById("pietra");

let risultatohtml = document.getElementById("risultato");


bottone.onclick = function(){
    let nome = document.getElementById("inputtext").value;
    
     saluto.textContent = `Ciao ${nome}`;

     textbox.classList.add("none");
     bottone.classList.add("none");

    gioco.classList.add("block");

}

function sorteggio(sceltaUtente){
   
    // SCELTA PC

    let idCarta = document.getElementById("carta");

    let idForbice = document.getElementById("forbice");

    let idPietra = document.getElementById("pietra");

    idCarta = "carta";

    idForbice = "forbice";

    idPietra = "pietra";


    let sceltePc = [idCarta,idForbice,idPietra];

    let random = Math.floor(Math.random() * sceltePc.length);

    let risultatoPc = sceltePc[random];

    // SCELTA UTENTE



    let utente = sceltaUtente.id;
    

    if (utente === risultatoPc ){
        console.log(`hai scelto ${utente}`);
        console.log(`Il pc ha scelto ${risultatoPc}`);
        console.log("pareggio");

        risultatohtml.textContent = `Hai scelto ${utente}, Il PC ha scelto ${risultatoPc}, Pareggio!`;
    } else {

           

        if(utente === idCarta && risultatoPc === "pietra" ) {
            console.log(`hai scelto ${utente}`);
            console.log(`Il pc ha scelto ${risultatoPc}`);
            console.log("Hai vinto");
            risultatohtml.textContent = `Hai scelto ${utente}, Il PC ha scelto ${risultatoPc}, Hai vinto!`;
        }

        else if(utente === idForbice && risultatoPc === "carta" ) {
            console.log(`hai scelto ${utente}`);
            console.log(`Il pc ha scelto ${risultatoPc}`);
            console.log("Hai vinto");
            risultatohtml.textContent = `Hai scelto ${utente}, Il PC ha scelto ${risultatoPc}, Hai vinto!`;
        } else if 

        (utente === idPietra && risultatoPc === "forbice" ){
            console.log(`hai scelto ${utente}`);
            console.log(`Il pc ha scelto ${risultatoPc}`);
            console.log("Hai vinto");
            risultatohtml.textContent = `Hai scelto ${utente}, Il PC ha scelto ${risultatoPc}, Hai vinto!`;
        }

        else {

        console.log(`hai scelto ${utente}`);
        console.log(`Il pc ha scelto ${risultatoPc}`);
        console.log("Hai perso");
        risultatohtml.textContent = `Hai scelto ${utente}, Il PC ha scelto ${risultatoPc}, Hai perso :(`;
        }
    }



 
    
}


