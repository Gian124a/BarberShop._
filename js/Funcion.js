function FormulaResena(Activo, Activo_Fondo, Activo_Resena, Activo_equis){
    let Fondo = document.getElementById('Fondo-Negro');
    let Resena = document.getElementById('Resenas');
    let equis = document.getElementById('X');
    let boton = Activo;
    if (boton == Activo) {
        Fondo.style.display = Activo_Fondo;
        Resena.style.display = Activo_Resena;
        equis.style.display = Activo_equis;
        boton = !boton;
    }
}
function HacerResena() { FormulaResena(false, "flex", "grid", "initial"); document.body.style.overflow = 'hidden'; window.scrollTo(0, 0);}
function QuitarResena(){ FormulaResena(true, "none", "none", "none"); document.body.style.overflow = 'auto';}



function seleccionarHora(hora) {
    document.querySelector('.Seleccionado').style.display = 'block';
    document.getElementById('horaSeleccionada').innerText = hora;
    var botones = document.querySelectorAll('.Horarios button');
    var but = document.getElementById('Boton-Siguiente');
    
    botones.forEach(function(boton) {
        boton.style.display = 'none';
    });
    
    but.style.display = 'block';
}
function cancelarSeleccion() {
    document.querySelector('.Seleccionado').style.display = 'none';
    var botones = document.querySelectorAll('.Horarios button');
    var but = document.getElementById('Boton-Siguiente');
    botones.forEach(function(boton) {
        boton.style.display = 'block';
        but.style.display = 'none';
    });
}
function Dia(dia){
    let horario = document.getElementById('Cont-Horarios');
    let diaSemana = document.getElementById(dia);
    let ultimoDiaSeleccionado = null;
    let boton = false;
    if (boton == false) {
        horario.style.display = 'flex';
        ultimoDiaSeleccionado.style.background = '#2264f2';
        ultimoDiaSeleccionado.style.color = '#FFFFFF';
        boton = true;
    }
    else if(boton == true){
        horario.style.display = 'none';
        boton = false;
    }
}
function CrearCita() {
    document.getElementById('Cita').style.display = 'none';
    document.getElementById('Verificado').style.display = 'flex';
}

$(document).ready(function(){
    $(".star").click(function(){
        $(this).prevAll().addBack().addClass("active");
        $(this).nextAll().removeClass("active");
    });
});

window.onload = function() {
    $('#Onload').fadeOut();
    $('body').removeClass('Hidden');
}