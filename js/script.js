var h = document.getElementsByTagName('html')[0]

function jschg(){
  h.setAttribute('class', 'hasjs');   
}

window.addEventListener('load', jschg());
