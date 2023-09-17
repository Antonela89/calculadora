// Seleccionar elementos del DOM
const expresionElement = document.querySelector(".expresion");
const resultadoElement = document.querySelector(".resultado");
const botones = document.querySelectorAll(".boton");
// const botonIgual = document.querySelector(".boton-igual");
// const botonReceteo = document.querySelector(".boton-receteo");

// console.log(Math);

let ultimoBotonIgual = false; // Inicialmente, el último botón no fue el de igual

// Manejar eventos de los botones
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        if (ultimoBotonIgual) {
            // Si el último botón fue el de igual, limpiar la expresión
            expresionElement.textContent = "";
            resultadoElement.textContent = "";
            ultimoBotonIgual = false; // Reiniciar el estado
        }

        if (boton.classList.contains("boton-borrar")) {
            const nuevaExpresion = expresionElement.textContent.slice(0, -1);
            expresionElement.textContent = nuevaExpresion;
            ultimoBotonIgual = false; // Reiniciar el estado
        } else {
            expresionElement.textContent += boton.textContent; // agrega la expresión matemática
        }

        if(boton.classList.contains("boton-igual")) {
            try {
                const expresion = expresionElement.textContent.slice(0, -1);
                // console.log(expresion);
                const resultado = math.evaluate(expresion);
                // console.log(resultado);
                resultadoElement.textContent = resultado;
                ultimoBotonIgual = true; // El último botón fue el de igual
            } catch (error) {
                resultadoElement.textContent = "Error";
            }
        }

        if (boton.classList.contains("boton-receteo")) {
            expresionElement.textContent = "";
            resultadoElement.textContent = "";
            ultimoBotonIgual = false; // Reiniciar el estado
        }
    });
});

//colocar función englobadora del código para asegurar qe se ejecute despues de q se cargue todo el código
document.addEventListener("DOMContentLoaded", function () {
    // Coloca aquí función
})