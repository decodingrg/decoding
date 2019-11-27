// Trae el modal.
var modal = document.getElementsByClassName("modal")[0];

// Trae el boton que abre el modal.
var btn = document.getElementsByClassName("fas fa-bars")[0];

// Trael el boton que cierra el modal
var span = document.getElementsByClassName("fas fa-times")[0];

// Cuando el se hace click en el boton, se abre el modal.
btn.onclick = function() {
  modal.className+=" visible";
}

// Cuando se hace click en la X se cierra el modal.
span.onclick = function() {
  modal.className="modal";
}

// Cuando se hace click afuera del modal, se cierra.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.className="modal";
  }
} 

/*Llama a todos los elementos que sean un enlace <a> con un "href=#" y les agrega el evento de click.*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) 
    	{
        	/*Previene el evento predeterminado del click*/
          e.preventDefault();
          /*Agrega un scroll suave hacia el id="" del HTML.*/
        	document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
          /*Obtenemos a la etiqueta que se le hiso click.*/
          padre= e.target || e.srcElement;
          /*Y Buscamos al padre del padre (la etiqueta modal), y le cambiamos la clase.*/
          padre.parentNode.parentNode.className="modal";
    	});
	});