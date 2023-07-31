const btnMode = document.getElementById("mode");
const components = document.getElementsByClassName("style-mode");
const arrayComponents = Array.from(components);
let mode = false;

export default function pageMode() {
    btnMode.textContent = "🌛";
    btnMode.addEventListener("click", () => {
        arrayComponents.forEach((e) => {
            e.classList.toggle("dark");
        });
        mode
            ? ((btnMode.textContent = "🌛"), (mode = false))
            : ((btnMode.textContent = "🌞"), (mode = true));
    });
}
