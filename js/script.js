var boton = document.getElementById('opciones');
var opciones = document.getElementById('contenedor-opciones');
var titulo = document.getElementById('titulo');
var carrusel = document.getElementById('carousel');
var botonnavbar= document.getElementById('boton-navbar');


boton.addEventListener('click', function(){
   opciones.classList.toggle('d-none');
   opciones.setAttribute('visible-data','visible');
   titulo.classList.toggle('d-none');
    carrusel.classList.toggle('d-none');
})

botonnavbar.addEventListener('click',function(){
    if((botonnavbar.classList.contains('collapsed')) && (opciones.hasAttribute('visible-data'))){
        console.log("hola")
        opciones.classList.toggle('d-none');
        opciones.setAttribute('visible-data','visible');
        titulo.classList.toggle('d-none');
         carrusel.classList.toggle('d-none');
    }
})

/* function mostrar(){
    if((botonnavbar.classList.contains('collapsed')) && (opciones.hasAttribute('visible-data'))){
        console.log("hola")
        opciones.classList.toggle('d-none');
        opciones.setAttribute('visible-data','visible');
        titulo.classList.toggle('d-none');
         carrusel.classList.toggle('d-none');
    }
}
 */

