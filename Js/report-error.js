document.addEventListener("DOMContentLoaded", () => {

    const descripcion = document.getElementById("descripcion");

    const contador = document.getElementById("character-count");

    descripcion.addEventListener("input", () => {

        const cantidad = descripcion.value.length;

        contador.textContent = cantidad;

        if (cantidad >= 490) {

            contador.style.color = "#e74c3c";

        } else if (cantidad >= 450) {

            contador.style.color = "#f39c12";

        } else {

            contador.style.color = "#666";

        }

    });

});