import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
const lista = document.querySelector("[data-lista]");

function crearCard(titulo, descripcion, url, precio) {
    const imagen = document.createElement("div");
    imagen.classList.add("card-container");
    imagen.innerHTML = `
        <div class="card">
            <img src="${url}" alt="${titulo}">
            <div class="card-description">
                <h3>${titulo}</h3>
                <p>${descripcion}</p>
                <p>Precio: $${precio}</p>
                <button class="eliminar">Eliminar</button>
            </div>
        </div>`;
    const botonEliminar = imagen.querySelector(".eliminar");
    botonEliminar.addEventListener("click", () => {
        imagen.remove();
    });
    return imagen;
}

async function listarImagenes() {
    const listaAPI = await conexionAPI.listarImagenes();
    listaAPI.forEach(imagen => lista.appendChild(crearCard(imagen.titulo, imagen.descripcion, imagen.imagen, imagen.precio)));
}

listarImagenes();