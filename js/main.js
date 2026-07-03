const btnModo = document.getElementById("btn-modo");

if (btnModo) {
  btnModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
    const modoActivo = document.body.classList.contains("modo-oscuro");
    btnModo.textContent = modoActivo ? "☀️ Modo claro" : "🌙 Modo oscuro";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const shrinkAt = 80;

  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > shrinkAt);
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});

const form = document.getElementById("form-newsletter");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
      alert("Gracias por inscribirte a Salud entre Todos 💜");
      form.reset();
    } else {
      form.reportValidity();
    }
  });
}

