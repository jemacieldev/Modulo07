function validarFormulario() {
    // Pega os valores dos campos de entrada
    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;

    // Verifica se B é maior que A
    if (campoB > campoA) {
        // Exibe uma mensagem de validação positiva
        document.getElementById("mensagem").innerHTML = "Formulário válido!";
        return true; // permite que o formulário seja submetido
    } else {
        // Exibe uma mensagem de validação negativa
        document.getElementById("mensagem").innerHTML = "O campo B deve ser maior que o campo A.";
        return false; // impede que o formulário seja submetido
    }
}

