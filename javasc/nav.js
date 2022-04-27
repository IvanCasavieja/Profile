window.onscroll = function () {
  let offsetNav = 60;
  const secciones = document.getElementsByTagName("section"); //crear lista de secciones
  document.getElementById("nav").style.top = "-100px";


//ciclo para obtener el top de las secciones el scroll del usuario
  for (let i = 0; i < secciones.length; i++) {
    if (
      window.scrollY >= secciones[i].offsetTop && //el scroll del usuario debe ser mayor o igual que el valor inicial de la seccion
      window.scrollY < secciones[i].offsetTop + offsetNav //el scroll del usuario debe ser menor que el valor inicial de cada seccion + el height del nav
    ) {
      document.getElementById("nav").style.top = "0px"; //devolver el nav a 0
    }
  }
};
