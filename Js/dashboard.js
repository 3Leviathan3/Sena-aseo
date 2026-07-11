document.addEventListener("DOMContentLoaded", async ()=>{

    await cargarComponente(

        "sidebar-container",

        "../components/sidebar.html"

    );

    await cargarComponente(

        "header-container",

        "../components/header.html"

    );
    
    /*Aqui continuan los await para cargar los demas componentes */

    cargarDatosUsuario();

    activarMenu();

});