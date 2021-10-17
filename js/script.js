var h = document.getElementsByTagName('html')[0];
var b = document.getElementById('submit');


function jschg(){
  h.setAttribute('class', 'hasjs');   
}

function color(){	
	b.style.backgroundColor = 'orange';
	b.style.color = 'black';	
}


window.addEventListener('load', jschg);
b.addEventListener('click', color);
