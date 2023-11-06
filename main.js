const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");

alertaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(alertaInput.value);
    alertaForm.reset();
});
