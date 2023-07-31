const btnClear = document.getElementById("clear");
const historial = document.getElementById("historial-math");
const p = document.getElementsByName("resultado");

export default function clearHistory() {
    btnClear.addEventListener("click", () => {
        historial.innerHTML = "";
    });
}
