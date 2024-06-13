async function listarImagenes() {
    const response = await fetch("http://localhost:3001/productos", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    });
    const productos = await response.json();
    return productos;
}

async function enviarImagen(descripcion, url, precio, titulo) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            descripcion: descripcion,
            url: url,
            precio: precio,
            titulo: titulo
        })
    });
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

export const conexionAPI = {
    listarImagenes,
    enviarImagen
};
