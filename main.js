const botones = document.querySelectorAll(".boton");
const expresion = document.querySelector(".expresion");
const resultado = document.querySelector(".resultado");

// console.log(botones);
// console.log(expresion);

botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        console.log(typeof(e.target.innerHTML));//string
        if(e.target.innerHTML === "AC") {
            expresion.innerHTML = "";
        } else {
            let expresion_parcial = e.target.innerHTML;
            expresion.innerHTML += expresion_parcial;
            // if(expresion.innerHTML !== "()" || "%" || "/" || "*"  || "-" || "+" || "=" ) {
            //     let valor = Number(expresion.innerHTML);
            //     console.log(valor);
            // } else {
            //     valor = "";
            // }
            console.log(typeof(expresion.innerHTML)); //string
        }
    });
});