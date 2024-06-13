import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function enviarImagen(evento) {
    evento.preventDefault();

    const descripcion = document.querySelector("[data-descripcion]").value;
    const precio = document.querySelector("[data-precio]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;

    await conexionAPI.enviarImagen(descripcion, url, precio);


    lista.appendChild(crearCard(titulo, descripcion, url, precio));

    
}
formulario.addEventListener("submit", enviarImagenFormulario);
