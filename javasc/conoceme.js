class infoPersonaObject {
    constructor(nameCalled, age, razon, region) {
        this.nameCalled = nameCalled;
        this.age = age;
        this.razon = razon;
        this.region = region;
    }
}
const infoPersona = [];

//constante para obtener el elemento

const conversar = document.getElementById("conversar");
console.log(conversar.innerHTML);

//----------------------------------

const txtConversar = document.getElementById("txt-conversar");
let infoPersonaArray = []; //declarar array
txtConversar.addEventListener("keypress", function (event) {  //añadir evento
    if (event.key == "Enter") { //key del evento
        let userInput = txtConversar.value;
        switch (infoPersonaArray.length) { //condicional del evento
            case 0:
                txtConversar.placeholder = "Hola " + userInput + " ¿Que edad tienes?"; //en el caso 1
                break;
            case 1:
                txtConversar.placeholder = "¿Por que razón visitas este sitio?";  //en el caso 2
                break;
            case 2:
                txtConversar.placeholder = "¿De donde eres?";  //en el caso 3
                break;
        }
        txtConversar.value = "";
        infoPersonaArray.push(userInput);
        if (infoPersonaArray.length == 4) { //pushear al array
            let nombre = infoPersonaArray[0];
            let edad = infoPersonaArray[1];
            let razon = infoPersonaArray[2];
            let region = infoPersonaArray[3];

            infoPersona.push(new infoPersonaObject(nombre, edad, razon, region)); //crear objeto
            alert(
                "De acuerdo " +
                infoPersonaArray[0] +
                " ahora que te conozco, puedo contarte un poco sobre mi..."
            );
            infoPersonaArray = [];
            txtConversar.placeholder = "¡Hola! ¿Como es tu nombre?";
            console.log(infoPersona);
        } else {
            console.log(infoPersonaArray);
        }
        event.preventDefault(); //evitar recharge de pagina
    }
});