const keys = document.getElementById("calculator-keys");
const screen_math = document.getElementById("calculator-math");
const screen_result = document.getElementById("calculator-result");
const container = document.getElementById("historial-math");

screen_math.textContent = "0";

const calculator = () => {
    if (!keys) return;
    keys.addEventListener("click", (e) => {
        const t = e.target;
        const d = t.dataset;

        //detectar si se pulso un numero o un operador
        if (t.value) writeScreen(t.value);

        //detectar si se pulso una igualdad
        if (d.operation) runOperation(d.operation);
    });
};

const writeScreen = (num) => {
    screen_math.textContent === "0"
        ? (screen_math.textContent = num)
        : num === "." && !screen_math.textContent.includes(".") //si no tiene un punto lo pone, pero si tiene no.
        ? (screen_math.textContent += num)
        : num !== "."
        ? (screen_math.textContent += num)
        : null;
};

const runOperation = (operation) => {
    const getResult = () => {
        let result = eval(screen_math.textContent);

        result === Infinity || result === -Infinity
            ? (screen_result.textContent = "Error")
            : (screen_result.textContent = result);
    };
    const deleteNum = () => {
        screen_math.textContent = borrarUltimoCaracter(screen_math.textContent);
    };
    switch (operation) {
        case "clear":
            screen_math.textContent = "0";
            screen_result.textContent = "";
            break;
        case "equal":
            getResult();
            addHistory(screen_math.textContent, screen_result.textContent);
            break;
        case "delete":
            console.log(borrarUltimoCaracter(screen_math.textContent));
            deleteNum();
            break;
        default:
            break;
    }
};

function borrarUltimoCaracter(str) {
    return str.substring(0, str.length - 1);
}

function addHistory(math, result) {
    container.innerHTML += `
        <p name="resultado">${math}=${result}</p>
    `;
}

export { calculator };
