const titulo = document.getElementById("titulo");

titulo.textContent = "NUESTRO GESTOR DE PRODUCTOS";

titulo.style.backgroundColor = "#052B75" 

const miBoton = document.querySelector("#boton-magico");

miBoton.addEventListener("click", function() {
    console.log("¡Has pulsado el botón!");
    document.body.classList.toggle("modo-alternativo");
});
