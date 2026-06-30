const btnModo = document.getElementById("btn-modo");
btnModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
    const modoActivo = document.body.classList.contains("modo-oscuro");
    btnModo.textContent = modoActivo ? "☀ Modo claro" : "🌙 Modo oscuro";
});
