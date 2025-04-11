function exercicioCondicionais01 () {

    let idade = prompt("Digite sua idade:");

    if (idade >= 18) {

        alert("Você é maior de idade.");

    } else {

        alert("Você é menor de idade.");

    }

    gerarLog("Exercício de condicionais 01 executado. " + new Date().toLocaleDateString());

}

function intermediario01comif () {

    let n1 = Number(prompt("Digite um número: "));
    let n2 = Number(prompt("Digite outro número: "));

    let operacao = prompt("Digite a operação: ");

    let resultado;

    // IF
    if (operacao == "+") {
        resultado = n1 + n2;
    } else if (operacao == "-") {
        resultado = n1 - n2;
    } else if (operacao == "*") {
        resultado = n1 * n2;
    } else if (operacao == "/") {
        resultado = n1 / n2;
    }

    alert(resultado);

}

function intermediario01comswitch () {

    let n1 = Number(prompt("Digite um número: "));
    let n2 = Number(prompt("Digite outro número: "));

    let operacao = prompt("Digite a operação: ");

    let resultado;

    // SWITCH
    switch (operacao) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            resultado = n1 / n2;
            break;
    
        default:
            alert("Operação inválido. Saia daqui agora!")
            break;
    }

    alert(resultado);

}

function gerarLog (textoDoLog) {

    let container = document.querySelector(".logs-container");

    let paragraph = document.createElement("p");

    paragraph.innerHTML = textoDoLog;

    container.appendChild(paragraph); // adiciona o paragrafo dentro de logsContainer

}