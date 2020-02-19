let slideIndex = 0;
let inter;
const slides = document.getElementsByClassName("slide"); /*Llama a todos los elementos con la clase "slide".*/
const pos=document.getElementsByClassName("pos")[0]; /*Llama al primer elemento con la clase "pos".*/
const botizq=document.getElementsByClassName("bot izq")[0];
const botder=document.getElementsByClassName("bot der")[0];

for(var i=0; i<slides.length; i++) /*Repite el ciclo por cada elemento con la clase "slide".*/
  {
    const dot=document.createElement("span");/*Crea el elemento <span>*/
    dot.setAttribute("class", "dot"); /*Le agrega la clase "dot"*/
    pos.appendChild(dot); /*Lo introduce en el contenedor "pos".*/
  }

const dots = document.getElementsByClassName("dot"); /*Llama a todos los elementos con la clase "dot"*/

botizq.onclick=function(){cambio(0)};
botder.onclick=function(){cambio(1)};

mostrar();

function cambio(num)
  {
    clearTimeout(inter);
    if (num==0)
      {
        slideIndex=slideIndex-1;
        if (slideIndex < 0)
            {
              slideIndex=slides.length-1;
            }
      }
    else
      {
        slideIndex=slideIndex+1;
        if (slideIndex > slides.length-1)
          { 
            slideIndex = 0;
          }
      }
    mostrar();
  }

function mostrar()
  {
    ocultar();
    slides[slideIndex].style.display = "grid"; /*Cambia al "slide" para que sea visible*/  
    dots[slideIndex].className += " select"; /*Le agrega la clase "select" a el "dot" donde se posiciona.*/
    intervalo();
  }

function ocultar()
  {
    for (let i = 0; i < dots.length; i++)
      {
        dots[i].className = dots[i].className.replace("select", ""); /*Le reemplaza la clase "select" a todos los "dot" por una clase vacia.*/
        slides[i].style.display = "none"; /*Oculta todos los slides*/  
      }
  }

function intervalo()
  {
    inter=setTimeout(function(){cambio(1)},10000);
  }