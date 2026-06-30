import { salvarResposta } from "./firebase.js";

const overlay = document.getElementById("overlay");
const mensagem = document.getElementById("mensagem");

function mostrarModal(texto) {
    mensagem.textContent = texto;

    overlay.classList.add("show");

    setTimeout(() => {
        overlay.classList.remove("show");
    }, 2000);
}

document.getElementById("sim").onclick = async () => {
    await salvarResposta("Sim");
    mostrarModal("Resposta enviada ❤️");
};

document.getElementById("nao").onclick = async () => {
    await salvarResposta("Não");
    mostrarModal("Resposta enviada 🥺");
};