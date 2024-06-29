let palabra = "TRAIN";
let intentos = 6;

const grid = document.getElementById("grid")
const boton = document.getElementById("guess-button");

boton.addEventListener("click", () => {
    const intento = leerIntento();
    console.clear();

    const row = document.createElement("div");
    row.className = "row";

    for (const i in palabra){
        const span = document.createElement("span");
        span.className = "letter";
        span.innerHTML = intento[i];
        if (palabra[i] == intento[i]) { 
            span.style.backgroundColor = "green";
            row.appendChild(span);
            console.log(span);
        } else if (palabra.includes(intento[i])){
            span.style.backgroundColor = "yellow";
        } else {
            span.style.backgroundColor = "gray";
        }row.appendChild(span);
        
    }
    grid.appendChild(row);
    if (palabra === intento){
        terminar("GANASTE!😀");
        return;
    }
    intentos--;

    if (!intentos){
        terminar("PERDISTE!😖");
        return;
    }
});

function terminar(mensaje){
    const resultado = document.getElementById("guesses")
    resultado.innerHTML = `<h1>${mensaje}</h1>`;
    boton.disabled = true;
}

function leerIntento(){
    const input = document.getElementById("guess-input");
    return input.value.toUpperCase();
}