let parrafo = document.createElement ("p");
parrafo.innerHTML = "<h4>(Complete los siguientes campos)</h4>";

let contenido = document.getElementById("contenido");
contenido.append(parrafo); 

let boton = document.getElementById("boton");

const datos = () => {
alert ("Recibirá un e-mail en breve para confirmar sus datos!");
};

boton.addEventListener("click",datos);
/// 
let cont = document.getElementById("contenido");
let nombre = document.getElementById("nombre");
nombre.addEventListener("keydown", () => console.log("keydown"));

nombre.addEventListener("keydown", (e) => {
if (e.key === "a") {
    cont.className = "uno";
} else if (e.key === "b") {
    cont.className = "dos";
} else if (e.key === "c") {
    cont.className = "tres";
}else if (e.key === "d") {
    cont.className = "tres";
} else if (e.key === "r") {
    cont.className = "dos";
}
else {
    cont.className = "cuatro";
}
});


// JSON nombre
function guardarValor() {
    var valor = document.getElementById("myInput").value;
    localStorage.setItem("miValor", valor);
}
window.onload = function() {
    var valor = localStorage.getItem("miValor");
    if (valor!== null) {
document.getElementById("myInput").valor = valor;
    }
}

// e-mail//
function valor() {
    var valor = document.getElementById("inputdos").value;
    localStorage.setItem("inputdos", valor);
}
window.onload = function() {
    var valor = localStorage.getItem("valor");
    if (valor!== null) {
document.getElementById("inputdos").valor = valor;
    }
}

//contr
function valor() {
    var valor = document.getElementById("inputtres").value;
    localStorage.setItem("inputtres", valor);
}
window.onload = function() {
    var valor = localStorage.getItem("valor");
    if (valor!== null) {
document.getElementById("inputtres").valor = valor;
    }
localStorage.removeItem("inputtres");
}