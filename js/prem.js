var prem=document.getElementsByClassName("menu-prem");
var contenedor=document.getElementsByClassName("open")[0];
for(i=0; i<prem.length; i++)
			{
				elem=prem[i];
				for(a=0; a<elem.childNodes.length; a++)
					{		
						if(elem.childNodes[a].className=="image-prem" || elem.childNodes[a].className=="puntos-prem")
							{
								elem.childNodes[a].onclick=marcar;		
							}			
					}
			}

function marcar(e)
	{
		var a=window.event || e;
		var pos = a.target || a.srcElement;
		contenedor.innerHTML="";
		contenedor.style.display="grid";
		contenedor.className+=" animated fadeInUp";
		if(pos.className=="image-prem" || pos.className=="puntos-prem" )
			{
				var copiar=pos.parentNode;
  				var clon = copiar.cloneNode(true);
  				clon.className+= " animated fadeInUp";
  				for(i=0;i<clon.childNodes.length;i++)
  					{
  						if(clon.childNodes[i].className=="cerrar-prem")
							{
								clon.childNodes[i].onclick=cerrar;
							}
  					}
				contenedor.appendChild(clon);
			}
		else
			{
				pos=pos.parentNode;
				var copiar=pos.parentNode;
				var clon = copiar.cloneNode(true);
				clon.className+= " animated fadeInUp";
					for(i=0;i<clon.childNodes.length;i++)
  					{
  						if(clon.childNodes[i].className=="cerrar-prem")
							{
								clon.childNodes[i].onclick=cerrar;
							}
  					}
				contenedor.appendChild(clon);
				
			}
	}

function cerrar()
	{
		contenedor.innerHTML="";
		contenedor.className="open";
		contenedor.style.display="none";
	}	