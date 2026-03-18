// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {

// Pegando o formulário pelo ID
const formulario = document.getElementById("formContato");

// Verifica se o formulário existe (evita erro nas outras páginas)
if (formulario) {

    // Evento de envio do formulário
    formulario.addEventListener("submit", function (evento) {

        // Impede o envio real
        evento.preventDefault();

        // Pegando valores
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validação dos campos vazios
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            return;}
        // Validação de e-mail
        if (!email.includes("@") || !email.includes(".")) {
            alert("Por favor, insira um e-mail válido.");
            return;}

        // Mensagem de sucesso
        alert("Mensagem enviada com sucesso!");

        // Limpa o formulário
        formulario.reset();
    });}
});

