

function gerarBotao() {
    const idadeInput = document.getElementById("idadeInput");
    const idade = parseInt(idadeInput.value);
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpa o conteúdo anterior


    if(idade < 16) {
       resultadoDiv.innerHTML = "<p>Não pode votar</p>"; 
    } else if(idade >= 16 && idade < 17) {
        resultadoDiv.innerHTML = "<p>Pode votar, mas não é obrigatório</p>";
    } else if(idade >= 18 && idade < 64) {
        resultadoDiv.innerHTML = "<p>Pode votar e é obrigatório</p>";
    } else if(idade >= 64) {
        resultadoDiv.innerHTML = "<p>Pode votar, mas não é obrigatório</p>";
    }   
    else {
        resultadoDiv.innerHTML = "<p>Idade inválida</p>";
    }         
    

}



















