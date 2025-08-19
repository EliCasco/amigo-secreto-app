// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // nombres

function agregarAmigo() {
    const input = document.getElementById("amigo"); // el cuadro de texto
    const nombre = input.value.trim(); // lo que se escribió

    if (nombre === "") { // si está vacío
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // guardar

    input.value = "";

    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos"); // la lista de la página
    lista.innerHTML = ""; // limpiar

    for (let i = 0; i < amigos.length; i++) { // recorre todos
        const li = document.createElement("li"); // nuevo item
        li.textContent = amigos[i]; // pone el nombre
        lista.appendChild(li); // lo agrega a la lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // elige un número entre 0 y la cantidad de amigos menos 1
    let indice = parseInt(Math.random() * amigos.length);

    let ganador = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${ganador}</li>`;
}

function reiniciarJuego() {
    amigos = []; // vacía la lista de amigos

    mostrarListaAmigos(); // limpia la lista en la pantalla

    // limpia el resultado del sorteo
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}    
