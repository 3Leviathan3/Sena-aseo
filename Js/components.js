/* Script para cargar componentes HTML como Sidebar, Header, etc. */
async function cargarComponente(idContenedor, rutaComponente){

    const contenedor = document.getElementById(idContenedor);

    if(!contenedor) return;

    const respuesta = await fetch(rutaComponente);

    contenedor.innerHTML = await respuesta.text();

}