window.onload = function() {
    $('#Onload').fadeOut();
    $('body').removeClass('Hidden');
}

function aplicarEfectoScroll(elementoId, propiedades, distancia) {
    let efectoAplicado = false; // Variable para controlar si el efecto ya se aplicó
    let elemento = document.getElementById(elementoId);
    window.addEventListener('scroll', function() {
      let scrollPosition = window.scrollY;
      if (scrollPosition > distancia && !efectoAplicado) {
        for (let propiedad in propiedades) {
          elemento.style[propiedad] = propiedades[propiedad];
        }
        efectoAplicado = true;
      }
    });
  }

let distancia = document.getElementById('Cont-Barberos').offsetTop + 50;
aplicarEfectoScroll('Cont-Barberos', {opacity: '1', top: '0', transition: '1s'}, distancia);
    
let distanciaServicios = document.getElementById('Cont-Servicios').offsetTop + 100;
aplicarEfectoScroll('Descripcion-Servicios', {opacity: '1', transition: '.8s'}, distanciaServicios);
aplicarEfectoScroll('Carta1', { opacity: '1', transition: '1.4s' }, distanciaServicios);
aplicarEfectoScroll('Carta2', { opacity: '1', transition: '3s' }, distanciaServicios);
aplicarEfectoScroll('Carta3', { opacity: '1', transition: '5s' }, distanciaServicios);

animateCircularProgressBars();
let distanciaStats = document.getElementById('Cont-Stats').offsetTop + 150;
aplicarEfectoScroll('Descripcion-Stats', {opacity: '1', transition: '2s'}, distanciaStats);

let distanciaResenitas = document.getElementById('Resenas-Negocio').offsetTop + 100;
aplicarEfectoScroll('TituloResena', {opacity: '1', transition: '2s'}, distanciaResenitas);
aplicarEfectoScroll('DescripcionResena', { opacity: '1', transition: '2s' }, distanciaResenitas);
aplicarEfectoScroll('Cartica', { right: '0', transition: '1.2s' }, distanciaResenitas);
aplicarEfectoScroll('Cartica2', { right: '0', transition: '1.5s' }, distanciaResenitas);
  
function Formula_Cartas(id, Activo_Boton, Activo_Servicio, Activo_Servicio2, Activo_Servicio3){
    let Servicio = document.getElementById(id);
    Servicio.style.opacity = Activo_Servicio;
    Servicio.style.transition = Activo_Servicio2;
    Servicio.style.zIndex = Activo_Servicio3;
    Boton = Activo_Boton;
}
function Ver(id_Carta, Flecha){
    let flechaSelector = document.querySelector(Flecha);
    Formula_Cartas(id_Carta, true, '1', '.5s', '5');
    flechaSelector.style.left = '-100%';
    flechaSelector.style.transition = '.7s';
}
  
function Cerrar(id_Carta, Flecha){
    let flechaSelector = document.querySelector(Flecha);
    Formula_Cartas(id_Carta, true, '0', '.5', '-1');
    flechaSelector.style.left = '0';
    flechaSelector.style.transition = '.7s';
}

function animateCircularProgressBars() {
    let progressBars = document.querySelectorAll(".circular-progress");
    let valueContainers = document.querySelectorAll(".Contador");
    let progressEndValues = [50, 10, 70]; // Valores finales de progreso para cada gráfico
    let speed = 20; // Velocidades de progreso diferentes para cada gráfico
    let progressValues = [0, 0, 0];
    let progress = setInterval(() => {
        for (let i = 0; i < progressBars.length; i++) {
            if (progressValues[i] < progressEndValues[i]) {
                progressValues[i]++;
                valueContainers[i].textContent = `${progressValues[i]}%`;
                progressBars[i].style.background = `conic-gradient(
                    #4681ff 0deg,
                    #4681ff ${progressValues[i] / 100 * 360}deg,
                    #cadcff ${progressValues[i] / 100 * 360}deg,
                    #cadcff 360deg
                )`;
                if (progressValues[i] == progressEndValues[i]) {
                    progressBars[i].style.boxShadow = "0 0 10px #4CAF50"; // Efecto visual al alcanzar el progreso final
                }
            }
        }
        if (progressValues.every((val, index) => val >= progressEndValues[index])) {
            clearInterval(progress);
        }
    }, speed);
}
function scrollToElements(selector, offset) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function(element) {
      element.addEventListener("click", function(event) {
        event.preventDefault();
        var targetElement = document.getElementById(this.getAttribute('href').substring(1));
        var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      });
    });
}
  
scrollToElements("#Letra-Menu:nth-child(1)", 0);
scrollToElements("#Letra-Menu:nth-child(2)", 150);
scrollToElements("#Letra-Menu:nth-child(3)", 160);
scrollToElements("#Letra-Menu:nth-child(4)", 120);