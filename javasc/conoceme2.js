class infoPersonaObject {
    constructor(nameCalled, age, razon, region) {
        this.nameCalled = nameCalled
        this.age = age
        this.razon = razon;
        this.region = region;
    }
}

const infoPersona = [];



const conversar = document.getElementById('conversar');

let user;

const txtConversar = document.getElementById('txt-conversar');
let infoPersonaArray = [];
txtConversar.addEventListener('submit', manejadorDeEvento);
function manejadorDeEvento(e) {
    e.preventDefault();
    user = document.getElementById('conversar').value;
    const yaTeConozco = JSON.parse(localStorage.getItem(user));

    if (yaTeConozco == null) {
        let userInput = txtConversar.value;
        switch (
        infoPersonaArray.length //condicional del evento
        ) {
            case 0:
                conversar.innerHTML = "Hola " + userInput + " ¿Que edad tienes?"; //en el caso 1
                txtConversar.placeholder = "Digita tu edad";
                break;
            case 1:
                conversar.innerHTML = "¿Por que razón visitas este sitio?"; //en el caso 2
                txtConversar.placeholder = "Explica tu motivo";
                break;
            case 2:
                conversar.innerHTML = "¿De donde eres?"; //en el caso 3
                txtConversar.placeholder = "Tu region";
                break;
        }
        txtConversar.value = "";
    }
}

