const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu ul');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('show');

});

const mediosdepago = document.querySelector('#mediosdepago');
const imgMediosPago = document.querySelector('#img-medios-pago');

mediosdepago.addEventListener('click', function(){
  imgMediosPago.classList.toggle('show')
})

const comprar = document.querySelector('#comprar');
const imgProductos = document.querySelector('#img-productos');

comprar.addEventListener('click', function(){
  imgProductos.classList.toggle('show')
})