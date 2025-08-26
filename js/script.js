import ehUmCpf from "./valida-cpf.js";
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

function verificaCampo(campo) {
    if(campo.name === "cpf" && campo.value.length >= 11) {
        ehUmCpf(campo);
    }
}