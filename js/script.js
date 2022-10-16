var boton = document.getElementById('opciones');
var opciones = document.getElementById('contenedor-opciones');
var titulo = document.getElementById('titulo');
var carrusel = document.getElementById('carousel');
var botonnavbar= document.getElementById('boton-navbar');
 
console.log(boton)
boton.addEventListener('click', function(){
   opciones.classList.toggle('d-none');
   opciones.setAttribute('visible-data','visible');
})
 
botonnavbar.addEventListener('click',function(){
    if((botonnavbar.classList.contains('collapsed')) && (opciones.hasAttribute('visible-data'))){
        console.log("hola")
        opciones.classList.add('d-none');
        opciones.setAttribute('visible-data','visible');
 
    }
})