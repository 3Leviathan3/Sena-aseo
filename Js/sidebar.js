/*Script para adherir la plantilla del sidebar*/

document.addEventListener("DOMContentLoaded", cargarSidebar);

async function cargarSidebar() {

    const contenedor = document.getElementById("sidebar-container");

    if (!contenedor) return;

    try {

        const respuesta = await fetch("../components/sidebar.html");

        const sidebar = await respuesta.text();

        contenedor.innerHTML = sidebar;

        cargarDatosUsuario();

        activarMenu();

    } catch (error) {

        console.error("Error al cargar el sidebar:", error);

    }

}

/* Script para cargar los datos del usuario */

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

/*Script para activar el boton seleccionado*/

function activarMenu() {

    const paginaActual = window.location.pathname.split("/").pop();

    const botones = document.querySelectorAll(".menu-button");

    botones.forEach((boton) => {

        if (boton.dataset.page === paginaActual) {

            boton.classList.add("menu-button-active");

        }

    });

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