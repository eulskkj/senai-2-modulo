document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("gerarBotao").addEventListener("click", gerarBotao);
});

function gerarBotao() {
    const idadeInput = document.getElementById("idadeInput");
    const idade = parseInt(idadeInput.value);
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpa o conteúdo anterior

    if (isNaN(idade) || idade < 0 || idade > 120) {
        resultadoDiv.innerHTML = "<p>Idade inválida</p>";
        return;
    }

    if (idade < 16) {
        resultadoDiv.innerHTML = "<p>Não pode votar</p>";
    } else if (idade >= 16 && idade < 18) {
        resultadoDiv.innerHTML = "<p>Pode votar, mas não é obrigatório</p>";
    } else if (idade >= 18 && idade < 65) {
        resultadoDiv.innerHTML = "<p>Pode votar e é obrigatório</p>";
    } else {
        resultadoDiv.innerHTML = "<p>Pode votar, mas não é obrigatório</p>";
    }
}
















