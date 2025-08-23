// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // nombres

function agregarAmigo() {
    const input = document.getElementById("amigo"); // el cuadro de texto
    const nombre = input.value.trim(); // lo que se escribió

    if (!nombre) { // si está vacío
        alert("Por favor, escribe un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya esta en la lista.");
        input.value = "";
        return;
    }
    
    amigos.push(nombre);
    input.value = "";
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos"); // la lista de la página
    lista.innerHTML = ""; // limpiar

     amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
    
    function sortearAmigo() {
    if (amigos.length < 2) {
        alert ("Agrega al menos dos amigos para hacer un sorteo.");
        return;
    }
    
    const indice = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡${ganador} ha sido sorteado! 🎉</li>`;
}
    function reiniciarJuego() {
    amigos = [];

    mostrarListaAmigos();

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const input = document.getElementById("amigo");
    input.value = "";
}

