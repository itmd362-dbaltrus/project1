var h = document.getElementsByTagName('html')[0];
var b = document.getElementById('submit');


function jschg(){
  h.setAttribute('class', 'hasjs');   
}

function color(){	
	b.style.backgroundColor = 'orange';
	b.style.color = 'black';
	
	var name = document.getElementsByName('fname_field')[0].value + ' ' + document.getElementsByName('lname_field')[0].value;
    alert('The account for subscriber ' + name + ' has been created');
}


window.addEventListener('load', jschg);
b.addEventListener('click', color);
