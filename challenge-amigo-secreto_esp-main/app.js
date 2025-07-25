let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  let resultadoUl = document.getElementById("resultado")

  //aqui limpiamos por si queremos agregar nuevos otros amigos
  if(resultadoUl != ''){
    resultadoUl.innerHTML = ''
  }
  if (nombre === "") {
    //validamos que no sea un string vacio
    alert("Ingrese un valor valido");
  } else {
    //agregamos el valor a la lista
    amigos.push(nombre);
    document.getElementById("amigo").value = "";//limpiamos el input
    
    let listaAmigosUL = document.getElementById("listaAmigos");

    // limpianos para que no se dubliquen
    listaAmigosUL.innerHTML = "";

    // aqui hacemos un for, para agregar las li para mostrar por nombres de la lista
    amigos.forEach(function (amigo) {
      let listItem = document.createElement("li");
      listItem.textContent = amigo;
      listaAmigosUL.appendChild(listItem);
    });
  }
}

function sortearAmigo() {
  let numeroAmigos = amigos.length;//vemos la cantidad de items que tiene la lista
  let amigoSecreto = Math.floor(Math.random() * numeroAmigos) + 1;// sacamos un indice alatorio

  let resultadoUl = document.getElementById("resultado");
  let amigoElegido = amigos[amigoSecreto]// aqui se guarda el amigo aletorio

  let resultadoLi = document.createElement("li");
  resultadoLi.textContent = amigoElegido; //agregamos el resultado a la etiqueta li
  resultadoUl.appendChild(resultadoLi);
  let listaAmigosUL = document.getElementById("listaAmigos");
  listaAmigosUL.innerHTML = "";

  amigos=[];//limpiamos la lista cuando se solte otro
}
