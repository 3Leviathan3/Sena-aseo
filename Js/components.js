/* ==========================================
        CARGAR COMPONENTE HTML
========================================== */

async function cargarComponente(idContenedor, rutaComponente) {

    const contenedor = document.getElementById(idContenedor);

    if (!contenedor) return false;

    try {

        const respuesta = await fetch(rutaComponente);

        if (!respuesta.ok) {

            throw new Error(`No se pudo cargar ${rutaComponente}`);

        }

        contenedor.innerHTML = await respuesta.text();

        return true;

    } catch (error) {

        console.error(error);

        return false;

    }

}

