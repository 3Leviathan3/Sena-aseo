/* ==========================================
            CARGAR SIDEBAR
========================================== */

document.addEventListener("DOMContentLoaded", cargarSidebar);

async function cargarSidebar() {

    const cargado = await cargarComponente(
        "sidebar-container",
        "../components/sidebar.html"
    );

    if (!cargado) return;

    const sidebar = document.querySelector(".sidebar");

    const estado = localStorage.getItem("sidebar");
    
    console.log("Estado guardado:", estado);

    if (estado === "true") {

        sidebar.classList.add("collapsed");

    }

    cargarDatosUsuario();

    activarMenu();

}



/* ==========================================
        DATOS DEL USUARIO
========================================== */

function cargarDatosUsuario() {

    const usuario = {

        nombre: "",

        documento: ""

    };

    document.getElementById("user-name").textContent =
        usuario.nombre || "Usuario";

    document.getElementById("user-id").textContent =
        usuario.documento
            ? `ID: ${usuario.documento}`
            : "";

}


/* ==========================================
        BOTON ACTIVO DEL MENU
========================================== */

function activarMenu() {

    const paginaActual = window.location.pathname.split("/").pop();

    const botones = document.querySelectorAll(".menu-button");

    botones.forEach((boton) => {

        if (boton.dataset.page === paginaActual) {

            boton.classList.add("menu-button-active");

        }

    });

}


/* ==========================================
        BOTON HAMBURGUESA
========================================== */

document.addEventListener("click", toggleSidebar);

function toggleSidebar(event) {

    const boton = event.target.closest("#sidebar-toggle");

    if (!boton) return;

    const sidebar = document.querySelector(".sidebar");

    if (!sidebar) return;

    sidebar.classList.toggle("collapsed");

    const estaColapsado = sidebar.classList.contains("collapsed");

    localStorage.setItem("sidebar", estaColapsado);

}

/* Momemtaneamente este archivo contiene las funciones que realizara el archivo dashboard.js, despues se organizara
y sidebar solo contendra las funciones relacionadas con el sidebar */

/*function cargarDatosUsuario(){

    const usuario={

        nombre:"",

        documento:""

    };

    document.getElementById("user-name").textContent=

        usuario.nombre || "Usuario";

    document.getElementById("user-id").textContent=

        usuario.documento

        ? `ID: ${usuario.documento}`

        : "";

}

function activarMenu(){

    const paginaActual=

    window.location.pathname.split("/").pop();

    const botones=

    document.querySelectorAll(".menu-button");

    botones.forEach((boton)=>{

        if(boton.dataset.page===paginaActual){

            boton.classList.add("menu-button-active");

        }

    });

}
        
Creo que algo asi funcionaria en su momento*/