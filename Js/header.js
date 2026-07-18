document.addEventListener("DOMContentLoaded", cargarHeader);

async function cargarHeader() {

    const cargado = await cargarComponente(
        "header-container",
        "../components/header.html"
    );

    if (!cargado) return;

    // Funciones propias del header...

}


