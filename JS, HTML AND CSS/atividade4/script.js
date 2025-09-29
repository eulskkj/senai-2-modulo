function gerarBotao() {
    const n1 = parseFloat(document.getElementById("numero1").value);
    const n2 = parseFloat(document.getElementById("numero2").value);

    // Verifica se os valores são números válidos
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado").innerText = "Por favor, preencha os dois números corretamente.";
        return;
    }

    const resultado = n1 + n2;

    // Exibe o resultado no parágrafo, sem criar novos botões
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

// Adiciona o evento ao botão depois que o DOM for carregado
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("gerarBotao").addEventListener("click", gerarBotao);
});
