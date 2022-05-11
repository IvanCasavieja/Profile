class infoPersonaObject {
  constructor(nameCalled, age, razon, region, registro) {
    this.nameCalled = nameCalled;
    this.age = age;
    this.razon = razon;
    this.region = region;
    this.registro = registro;
  }
}
const infoPersona = [];

function nombreUsuarioRegistrado() {
  return localStorage.getItem("nombre");
}

//constante para obtener el elemento

const bienvenida = document.getElementById("bienvenida");
const conversar = document.getElementById("conversar");
let usuarioNombre = nombreUsuarioRegistrado();

if (usuarioNombre != null) {
  //logica para ocultar el dom cuando el usuario ya esta registrado
  bienvenida.innerHTML = "¡Bienvenido de nuevo " + usuarioNombre + "!";
  document.getElementById("conversar").style.display = "none";
  document.getElementById("txt-conversar").style.display = "none";
}

//----------------------------------

const txtConversar = document.getElementById("txt-conversar");
let infoPersonaArray = []; //declarar array
txtConversar.addEventListener("keypress", function (event) {
  //añadir evento
  if (event.key == "Enter") {
    //key del evento
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
    infoPersonaArray.push(userInput);
    if (infoPersonaArray.length == 4) {
      //pushear al array
      let nombre = infoPersonaArray[0];
      let edad = infoPersonaArray[1];
      let razon = infoPersonaArray[2];
      let region = infoPersonaArray[3];
      let registro = infoPersonaArray[4];

      registro = infoPersonaArray[1] >= 18 && new Date();
      console.log(registro);

      localStorage.setItem("nombre", nombre);
      localStorage.setItem("edad", edad);
      localStorage.setItem("razon", razon);
      localStorage.setItem("region", region);
      localStorage.setItem("registro", registro);

      infoPersona.push(
        new infoPersonaObject(nombre, edad, razon, region, registro)
      ); //crear objeto

      const personaJSON = (key, value) => {
        localStorage.setItem(key, value);
      };

      personaJSON("infoPersona", JSON.stringify(infoPersona));

      conversar.innerHTML =
        "De acuerdo " +
        infoPersonaArray[0] +
        " ahora que te conozco, puedo contarte un poco sobre mi...";
      txtConversar.style.display = "none";

      setTimeout(() => {
        document.getElementById("conocer").style.opacity = 0;
      }, 4000);

      //________________________________________________________
      const serviceID = "default_service";
      const templateID = "template_g1vokdo";

      emailjs.send(serviceID, templateID, {edad:edad, nombre: nombre, region: region, razon:razon} ).then(
        () => {
          console.log("Sent!");
        },
        (err) => {
          console.log(JSON.stringify(err));
        }
      );
      //espacio para cv

      infoPersonaArray = [];
      txtConversar.placeholder = "¡Hola! ¿Como es tu nombre?";
      console.log(infoPersona);
    } else {
      console.log(infoPersonaArray);
    }
    event.preventDefault(); //evitar recharge de pagina
  }
});

let variableDeApoyo = "";

function maquinaEscribir() {
  if (variableDeApoyo == "") {
    variableDeApoyo = bienvenida.innerHTML;
    bienvenida.innerHTML = "";
  }

  if (bienvenida.innerHTML.length != variableDeApoyo.length) {
    bienvenida.innerHTML = variableDeApoyo.substring(
      0,
      bienvenida.innerHTML.length + 1
    );
    setTimeout(() => {
      maquinaEscribir();
    }, 50);
  }
}

maquinaEscribir();

let variableDeApoyo2 = "";

function maquinaEscribir2() {
  if (variableDeApoyo2 == "") {
    variableDeApoyo2 = conversar.innerHTML;
    conversar.innerHTML = "";
  }

  if (conversar.innerHTML.length != variableDeApoyo2.length) {
    conversar.innerHTML = variableDeApoyo2.substring(
      0,
      conversar.innerHTML.length + 1
    );
    setTimeout(() => {
      maquinaEscribir2();
    }, 100);
  }
}

maquinaEscribir2();

randomRadius = () => {
  return Math.random() * 0.7 + 0.6;
};
getRandomX = () => {
  return Math.floor(Math.random() * Math.floor(window.innerWidth)).toString();
};
getRandomY = () => {
  return Math.floor(Math.random() * Math.floor(window.innerHeight)).toString();
};

function generarestrellitas() {
  let sky = document.getElementById("sky");
  for (let i = 0; i < 60; i++) {
    sky.innerHTML +=
      "<circle " +
      'cx="' +
      getRandomX() +
      '" ' +
      'cy="' +
      getRandomY() +
      '" ' +
      'r="' +
      randomRadius() +
      '" ' +
      'stroke="none" ' +
      'strokeWidth="0" ' +
      'fill="white" ' +
      'key="{y}" ' +
      'class="star" ' +
      "/>";
  }
}

generarestrellitas();

function estrellitasfugaz() {
  let shootingstars = document.getElementById("shootingstars");
  for (let i = 0; i < 60; i++) {
    shootingstars.innerHTML +=
      "<div " +
      'style="left:' +
      getRandomY() +
      "px; top:" +
      getRandomX() +
      'px" ' +
      'class="wish" ' +
      "></div>";
  }
}

estrellitasfugaz();

anime({
  targets: ["#sky .star"],
  opacity: [
    {
      duration: 700,
      value: "0",
    },
    {
      duration: 700,
      value: "1",
    },
  ],
  easing: "linear",
  loop: true,
  delay: (el, i) => 50 * i,
});

anime({
  targets: ["#shootingstars .wish"],
  easing: "linear",
  loop: true,
  delay: (el, i) => 1000 * i,
  opacity: [
    {
      duration: 700,
      value: "1",
    },
  ],
  width: [
    {
      value: "150px",
    },
    {
      value: "0px",
    },
  ],
  translateX: 350,
});
