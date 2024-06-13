import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
const lista = document.querySelector("[data-lista]");

async function enviarImagen(evento) {
    evento.preventDefault();

    const descripcion = document.querySelector("[data-descripcion]").value;
    const precio = document.querySelector("[data-precio]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const imagenInput = document.querySelector("[data-imagen]");
    
    if (imagenInput.files.length > 0) {
        const archivo = imagenInput.files[0];
        const url = URL.createObjectURL(archivo);

        // Aquí puedes agregar lógica para subir el archivo a tu servidor si es necesario
        await conexionAPI.enviarImagen(descripcion, url, precio, titulo);
        lista.appendChild(crearCard(titulo, descripcion, url, precio));

        formulario.reset();
    } else {
        console.error("No se ha seleccionado ninguna imagen.");
    }
}

formulario.addEventListener("submit", enviarImagen);
