/* Script para cargar los componentes para Mis Turnos */

document.addEventListener("DOMContentLoaded", async ()=>{

    await cargarComponente(

        "sidebar-container",

        "../components/sidebar.html"

    );

    await cargarComponente(

        "header-container",

        "../components/header.html"

    );

    cargarDatosUsuario();

    activarMenu();

});