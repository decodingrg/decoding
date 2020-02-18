var slideIndex = 0;
var slides = document.getElementsByClassName("slide"); /*Llama a todos los elementos con la clase "slide".*/
var pos=document.getElementsByClassName("pos")[0]; /*Llama al primer elemento con la clase "pos".*/
for(var i=0; i<slides.length; i++) /*Repite el ciclo por cada elemento con la clase "slide".*/
  {
    var dot=document.createElement("span");/*Crea el elemento <span>*/
    dot.setAttribute("class", "dot"); /*Le agrega la clase "dot"*/
    pos.appendChild(dot); /*Lo introduce en el contenedor "pos".*/
  }

mostrarSlides();

function mostrarSlides() {
  var i;
  var dots = document.getElementsByClassName("dot"); /*Llama a todos los elementos con la clase "dot"*/
  for (i = 0; i < slides.length; i++) /*Repite el ciclo por cada elemento con la clase "slide".*/
  	{
    	slides[i].style.display = "none"; /*Oculta todos los slides*/  
  	}
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} /*Si el slideIndex es mayor a la cantidad de slides, vuelve a la posicion 1.*/   
  for (i = 0; i < dots.length; i++)
  	{
    	dots[i].className = dots[i].className.replace("select", ""); /*Le reemplaza la clase "select" a todos los "dot" por una clase vacia.*/
  	}
  slides[slideIndex-1].style.display = "grid"; /*Cambia al "slide" para que sea visible*/  
  dots[slideIndex-1].className += " select"; /*Le agrega la clase "select" a el "dot" donde se posiciona.*/
  setTimeout(mostrarSlides,3000);
}